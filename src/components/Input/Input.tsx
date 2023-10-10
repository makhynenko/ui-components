import React, { useRef } from 'react';
import classnames from 'classnames';
import { IconName } from '../Icons/types';
import { Icons } from '../Icons';
import style from './input.module.scss';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  invalid?: boolean;
  icon?: IconName;
  clearable?: boolean;
  onClear?: () => void;
}

export const Input: React.FC<InputProps> = ({
  disabled,
  invalid,
  size: componentSize = 'medium',
  className,
  icon,
  clearable,
  onClear,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const iconSizeMap: Record<'small' | 'medium' | 'large', number> = {
    small: 14,
    medium: 18,
    large: 22,
  };

  const classes = classnames(
    style.Input,
    {
      [style['Input--disabled']]: disabled,
      [style['Input--invalid']]: invalid,
      [style['Input--small']]: componentSize === 'small',
      [style['Input--medium']]: componentSize === 'medium',
      [style['Input--large']]: componentSize === 'large',
      [style['Input--withIcon']]: Boolean(icon),
      [style['Input--clearable']]: Boolean(clearable),
    },
    className
  );

  const onClearClick = () => {
    onClear?.();
  };

  const onIconClick = (e) => {
    e.stopPropagation();
    inputRef.current?.focus();
  };

  return (
    <div className={style.InputWrapper}>
      <input {...props} className={classes} disabled={disabled} type='text' ref={inputRef} />
      {icon ? (
        <Icons
          name={icon}
          className={`${style.Icon} ${style['Icon--prefix']}`}
          size={iconSizeMap[componentSize]}
          onClick={onIconClick}
        />
      ) : null}
      {clearable && !disabled ? (
        <Icons
          name='crossCircle'
          onClick={onClearClick}
          className={`${style.Icon} ${style['Icon--clearable']}`}
          size={iconSizeMap[componentSize]}
        />
      ) : null}
    </div>
  );
};

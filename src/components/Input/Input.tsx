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
  iconPosition?: 'start' | 'end';
}

export const Input: React.FC<InputProps> = ({
  disabled,
  invalid,
  size: componentSize = 'medium',
  className,
  icon,
  clearable,
  onClear,
  iconPosition = 'start',
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const iconSizeMap: Record<'small' | 'medium' | 'large', number> = {
    small: 14,
    medium: 18,
    large: 22,
  };

  const inputClasses = classnames(
    style.Input,
    {
      [style['Input--disabled']]: disabled,
      [style['Input--invalid']]: invalid,
      [style['Input--small']]: componentSize === 'small',
      [style['Input--medium']]: componentSize === 'medium',
      [style['Input--large']]: componentSize === 'large',
      [style['Input--withIconStart']]: Boolean(icon) && iconPosition === 'start',
      [style['Input--withIconEnd']]: Boolean(icon) && iconPosition === 'end',
      [style['Input--clearable']]: Boolean(clearable),
    },
    className
  );

  const iconClasses = classnames(
    style.Icon,
    {
      [style['Icon--prefix']]: iconPosition === 'start',
      [style['Icon--postfix']]: iconPosition === 'end',
    },
    className
  );

  const iconClearableClasses = classnames(
    style.Icon,
    {
      [style['Icon--clearable']]: clearable,
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
      <input {...props} className={inputClasses} disabled={disabled} type='text' ref={inputRef} />
      {icon ? (
        <Icons
          name={icon}
          className={iconClasses}
          size={iconSizeMap[componentSize]}
          onClick={onIconClick}
        />
      ) : null}
      {clearable && !disabled && iconPosition === 'start' ? (
        <Icons
          name='crossCircle'
          onClick={onClearClick}
          className={iconClearableClasses}
          size={iconSizeMap[componentSize]}
        />
      ) : null}
    </div>
  );
};

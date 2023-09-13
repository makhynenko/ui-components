import React from 'react';
import './input.scss';
import classnames from 'classnames';
import { IconName } from '../Icons/types';
import { Icons } from '../Icons';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean,
  size?: 'small' | 'medium' | 'large',
  invalid?: boolean,
  icon?: IconName,
  clearable?: boolean,
  onClear?: () => void,
}

export const Input: React.FC<InputProps> = ({
  disabled, invalid, size: componentSize = 'medium', className, icon, clearable, onClear, ...props
}) => {
  const iconSizeMap: Record<'small' | 'medium' | 'large', number> = {
    small: 14,
    medium: 18,
    large: 22
  }

  const classes = classnames(
    'Input',
    {
      'Input--disabled': disabled,
      'Input--invalid': invalid,
      'Input--small': componentSize === 'small',
      'Input--medium': componentSize === 'medium',
      'Input--large': componentSize === 'large',
      'Input--withIcon': Boolean(icon),
      'Input--clearable': Boolean(clearable),
    },
    className
  );


  const onClearClick = () => {
    onClear?.()
  }

  return (
    <div className='InputWrapper'>
      <input {...props} className={classes} disabled={disabled} type='text' />
      {icon ? <Icons name={icon} className='Icon Icon--prefix' size={iconSizeMap[componentSize]} /> : null}
      {clearable && !disabled ? <Icons name='crossCircle' onClick={onClearClick} className='Icon Icon--clearable' size={iconSizeMap[componentSize]} /> : null}
    </div>
  );
}

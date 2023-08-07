import React from 'react';
import './input.scss';
import classnames from 'classnames';

// export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'size' | 'checked'> {

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean,
  size?: 'small' | 'medium' | 'large',
  invalid?: boolean,
}

export const Input: React.FC<InputProps> = ({
  disabled, invalid, size: componentSize, className, ...props
}) => {
  const classes = classnames(
    'Input',
    {
      'Input--disabled': disabled,
      'Input--invalid': invalid,
      'Input--small': componentSize === 'small',
      'Input--medium': componentSize === 'medium',
      'Input--large': componentSize === 'large',
    },
    className
  );


  return (
    <input {...props} className={classes} disabled={disabled} type='text' />
  );
}

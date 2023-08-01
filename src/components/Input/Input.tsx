import React from 'react';
import './input.scss';
import classnames from 'classnames';


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean,
  componentSize?: 'small' | 'medium' | 'large',
  invalid?: boolean,
}

export const Input: React.FC<InputProps> = ({
  disabled, invalid, componentSize, className, ...props
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

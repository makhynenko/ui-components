import React from 'react';
import classnames from 'classnames';
import './button.scss';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled, size, variant, className, ...props
}) => {
  const classes = classnames(
    'Button',
    {
      'Button--disabled': disabled,
      'Button--small': size === 'small',
      'Button--medium': size === 'medium',
      'Button--large': size === 'large',
      'Button--primary': variant === 'primary',
      'Button--secondary': variant === 'secondary'
    },
    className
  );

  return (
    <button {...props} className={classes} disabled={disabled}>{props.children}</button>
  );
}

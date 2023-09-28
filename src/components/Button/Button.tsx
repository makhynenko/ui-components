import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled,
  size,
  variant,
  className,
  ...props
}) => {
  const classes = classnames(
    styles.Button,
    {
      [styles['Button--disabled']]: disabled,
      [styles['Button--small']]: size === 'small',
      [styles['Button--medium']]: size === 'medium',
      [styles['Button--large']]: size === 'large',
      [styles['Button--primary']]: variant === 'primary',
      [styles['Button--secondary']]: variant === 'secondary',
    },
    className
  );

  return (
    <button {...props} className={classes} disabled={disabled}>
      {props.children}
    </button>
  );
};

import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';
import { ElementSize } from '../../types';

export interface ButtonProps {
  size?: ElementSize;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  width?: string;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled,
  size,
  variant,
  className,
  width = 'fit-content',
  ...props
}) => {
  const classes = classnames(
    styles.Button,
    {
      [styles['Button--disabled']]: disabled,
      [styles['Button--small']]: size === ElementSize.Small,
      [styles['Button--medium']]: size === ElementSize.Medium,
      [styles['Button--large']]: size === ElementSize.Large,
      [styles['Button--primary']]: variant === 'primary',
      [styles['Button--secondary']]: variant === 'secondary',
      [styles['Button--ghost']]: variant === 'ghost',
    },
    className
  );

  return (
    <button {...props} className={classes} disabled={disabled} style={{ width: width }}>
      {props.children}
    </button>
  );
};

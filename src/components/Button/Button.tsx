import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';
import { ElementSize } from '../../types';
import { Loader } from '../Loader';

export interface ButtonProps {
  size?: ElementSize;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  width?: string;
  isLoading?: boolean;
  loadingText?: string;
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  disabled,
  size,
  variant,
  className,
  width = 'fit-content',
  isLoading,
  loadingText = 'Loading',
  ...props
}) => {
  const classes = classnames(
    styles.Button,
    {
      [styles['Button--disabled']]: disabled || isLoading,
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
    <button
      {...props}
      className={classes}
      disabled={disabled || isLoading}
      style={{ width: width }}
    >
      {isLoading ? (
        <div className={styles.loadingWrapper}>
          <Loader />
          <p className={styles.loadingText}>{loadingText}</p>
        </div>
      ) : (
        props.children
      )}
    </button>
  );
};

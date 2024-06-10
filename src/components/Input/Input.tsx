import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import cn from 'classnames';
import { IconName } from '../Icons/types';
import { Icons } from '../Icons';
import styles from './input.module.scss';
import { ElementSize, InputType } from '../../types';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  size?: ElementSize;
  invalid?: boolean;
  icon?: IconName;
  clearable?: boolean;
  width?: string;
  type?: InputType;
  onClear?: () => void;
  iconPosition?: 'start' | 'end';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      invalid,
      size: componentSize = ElementSize.Medium,
      className,
      type = InputType.Text,
      icon,
      clearable,
      width = '100%',
      onClear,
      iconPosition = 'start',
      ...props
    },
    outerRef
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const ref = useMemo<React.RefObject<HTMLInputElement>>(
      () => (outerRef as React.RefObject<HTMLInputElement>) || inputRef,
      [outerRef, inputRef]
    );

    const iconSizeMap: Record<ElementSize, number> = {
      [ElementSize.Small]: 14,
      [ElementSize.Medium]: 18,
      [ElementSize.Large]: 22,
    };

    const inputClasses = useMemo(
      () =>
        cn(styles.Input, {
          [styles['Input--disabled']]: disabled,
          [styles['Input--invalid']]: invalid,
          [styles['Input--small']]: componentSize === ElementSize.Small,
          [styles['Input--medium']]: componentSize === ElementSize.Medium,
          [styles['Input--large']]: componentSize === ElementSize.Large,
          [styles['Input--withIconStart']]: Boolean(icon) && iconPosition === 'start',
          [styles['Input--withIconEnd']]: Boolean(icon) && iconPosition === 'end',
          [styles['Input--clearable']]: Boolean(clearable),
        }),
      [disabled, invalid, componentSize, iconPosition, clearable, icon]
    );

    const iconClasses = useMemo(
      () =>
        cn(styles.Icon, {
          [styles['Icon--prefix']]: iconPosition === 'start',
          [styles['Icon--postfix']]: iconPosition === 'end',
        }),
      [iconPosition]
    );

    const iconClearableClasses = useMemo(
      () =>
        cn(styles.Icon, {
          [styles['Icon--clearable']]: clearable,
        }),
      [clearable]
    );

    const onClearClick = useCallback(() => {
      onClear?.();
    }, [onClear]);

    const onIconClick = useCallback(
      (e) => {
        e.stopPropagation();
        ref.current?.focus();
      },
      [ref]
    );

    return (
      <div className={cn(styles.InputWrapper, className)} style={{ width }}>
        <input
          {...props}
          className={inputClasses}
          disabled={disabled}
          type={type}
          style={{ width }}
          ref={ref}
        />
        {icon ? (
          <Icons
            name={icon}
            className={iconClasses}
            size={iconSizeMap[componentSize]}
            onClick={onIconClick}
          />
        ) : null}
        {clearable && !disabled && iconPosition !== 'end' ? (
          <Icons
            name='crossCircle'
            onClick={onClearClick}
            className={iconClearableClasses}
            size={iconSizeMap[componentSize]}
          />
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

import React, { useCallback, useMemo, useRef } from 'react';
import styles from './textarea.module.scss';
import { ElementSize } from '../../types';
import { IconName } from '../Icons/types';
import cn from 'classnames';
import { Icons } from '../Icons';

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  disabled?: boolean;
  size?: ElementSize;
  invalid?: boolean;
  icon?: IconName;
  rows?: number;
  width?: string;
  clearable?: boolean;
  onClear?: () => void;
  iconPosition?: 'start' | 'end';
}

export const Textarea: React.FC<TextareaProps> = ({
  disabled,
  invalid,
  size: componentSize = ElementSize.Medium,
  className,
  icon,
  rows = 3,
  width = '100%',
  clearable,
  onClear,
  iconPosition = 'start',
  ...props
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const iconSizeMap: Record<ElementSize, number> = {
    [ElementSize.Small]: 14,
    [ElementSize.Medium]: 18,
    [ElementSize.Large]: 22,
  };

  const inputClasses = useMemo(
    () =>
      cn(styles.Textarea, {
        [styles['Textarea--disabled']]: disabled,
        [styles['Textarea--invalid']]: invalid,
        [styles['Textarea--small']]: componentSize === ElementSize.Small,
        [styles['Textarea--medium']]: componentSize === ElementSize.Medium,
        [styles['Textarea--large']]: componentSize === ElementSize.Large,
        [styles['Textarea--clearable']]: Boolean(clearable),
      }),
    [clearable, disabled, invalid, componentSize]
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

  return (
    <div className={cn(styles.InputWrapper, className)} style={{ width }}>
      <textarea
        {...props}
        className={inputClasses}
        disabled={disabled}
        rows={rows}
        ref={inputRef}
        style={{ width }}
      />

      {clearable && !disabled ? (
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

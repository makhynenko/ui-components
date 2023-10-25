import React, { useEffect, useState } from 'react';
import styles from './checkbox.module.scss';
import classnames from 'classnames';
import { ElementSize } from '../../types';

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'size' | 'checked'
  > {
  disabled?: boolean;
  size?: ElementSize;
  value?: boolean;
  label?: string;
  onChange?: (value: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  size,
  value,
  label,
  className,
  onChange,
  ...props
}) => {
  const [checked, setChecked] = useState<boolean>(value || false);

  useEffect(() => {
    if (typeof value === 'boolean') {
      setChecked(value);
    }
  }, [value]);

  const inputClasses = classnames(
    styles.Checkbox,
    {
      [styles['Checkbox--disabled']]: disabled,
      [styles['Checkbox--small']]: size === ElementSize.Small,
      [styles['Checkbox--medium']]: size === ElementSize.Medium,
      [styles['Checkbox--large']]: size === ElementSize.Large,
      [styles['Checkbox--checked']]: checked,
    },
    className
  );

  const labelClasses = classnames(styles.CheckboxLabel, {
    [styles['CheckboxLabel--small']]: size === ElementSize.Small,
    [styles['CheckboxLabel--medium']]: size === ElementSize.Medium,
    [styles['CheckboxLabel--large']]: size === ElementSize.Large,
    [styles['CheckboxLabel--disabled']]: disabled,
  });

  const checkmarkClasses = classnames(styles.Checkmark, {
    [styles['Checkmark--small']]: size === ElementSize.Small,
    [styles['Checkmark--medium']]: size === ElementSize.Medium,
    [styles['Checkmark--large']]: size === ElementSize.Large,
    [styles['Checkmark--disabled']]: disabled,
  });

  const onChangeHandler = (e) => {
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  return (
    <label className={labelClasses}>
      <input
        {...props}
        className={inputClasses}
        disabled={disabled}
        type='checkbox'
        checked={typeof value === 'boolean' ? value : checked}
        onChange={onChangeHandler}
      />
      <span className={checkmarkClasses}></span>
      {label ? <span className='checkboxLabelText'>{label}</span> : null}
    </label>
  );
};

import React, { useEffect, useState } from 'react';
import styles from './checkbox.module.scss';
import classnames from 'classnames';

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'size' | 'checked'
  > {
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
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
      [styles['Checkbox--small']]: size === 'small',
      [styles['Checkbox--medium']]: size === 'medium',
      [styles['Checkbox--large']]: size === 'large',
      [styles['Checkbox--checked']]: checked,
    },
    className
  );

  const labelClasses = classnames(styles.CheckboxLabel, {
    [styles['CheckboxLabel--small']]: size === 'small',
    [styles['CheckboxLabel--medium']]: size === 'medium',
    [styles['CheckboxLabel--large']]: size === 'large',
    [styles['CheckboxLabel--disabled']]: disabled,
  });

  const checkmarkClasses = classnames(styles.Checkmark, {
    [styles['Checkmark--small']]: size === 'small',
    [styles['Checkmark--medium']]: size === 'medium',
    [styles['Checkmark--large']]: size === 'large',
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

import React, { useEffect, useState } from 'react';
import styles from './radio.module.scss';
import classnames from 'classnames';
import { ElementSize } from '../../types';

export interface RadioProps
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

export const Radio: React.FC<RadioProps> = ({
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
    styles.Radio,
    {
      [styles['Radio--disabled']]: disabled,
      [styles['Radio--small']]: size === ElementSize.Small,
      [styles['Radio--medium']]: size === ElementSize.Medium,
      [styles['Radio--large']]: size === ElementSize.Large,
      [styles['Radio--checked']]: checked,
    },
    className
  );

  const labelClasses = classnames(styles.RadioLabel, {
    [styles['RadioLabel--small']]: size === ElementSize.Small,
    [styles['RadioLabel--medium']]: size === ElementSize.Medium,
    [styles['RadioLabel--large']]: size === ElementSize.Large,
    [styles['RadioLabel--disabled']]: disabled,
  });

  const checkmarkRadioClasses = classnames(styles.CheckmarkRadio, {
    [styles['CheckmarkRadio--small']]: size === ElementSize.Small,
    [styles['CheckmarkRadio--medium']]: size === ElementSize.Medium,
    [styles['CheckmarkRadio--large']]: size === ElementSize.Large,
    [styles['CheckmarkRadio--disabled']]: disabled,
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
        type='radio'
        checked={typeof value === 'boolean' ? value : checked}
        onChange={onChangeHandler}
      />
      <span className={checkmarkRadioClasses}></span>
      {label ? <span className={styles.radioLabelText}>{label}</span> : null}
    </label>
  );
};

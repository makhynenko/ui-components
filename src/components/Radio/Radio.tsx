import React, { useEffect, useState } from 'react';
import style from './radio.module.scss';
import classnames from 'classnames';

export interface RadioProps
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
    style.Radio,
    {
      [style['Radio--disabled']]: disabled,
      [style['Radio--small']]: size === 'small',
      [style['Radio--medium']]: size === 'medium',
      [style['Radio--large']]: size === 'large',
      [style['Radio--checked']]: checked,
    },
    className
  );

  const labelClasses = classnames(style.RadioLabel, {
    [style['RadioLabel--small']]: size === 'small',
    [style['RadioLabel--medium']]: size === 'medium',
    [style['RadioLabel--large']]: size === 'large',
    [style['RadioLabel--disabled']]: disabled,
  });

  const checkmarkRadioClasses = classnames(style.CheckmarkRadio, {
    [style['CheckmarkRadio--small']]: size === 'small',
    [style['CheckmarkRadio--medium']]: size === 'medium',
    [style['CheckmarkRadio--large']]: size === 'large',
    [style['CheckmarkRadio--disabled']]: disabled,
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
      {label ? <span className={style.radioLabelText}>{label}</span> : null}
    </label>
  );
};

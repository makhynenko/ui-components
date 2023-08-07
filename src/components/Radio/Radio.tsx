import React, { useEffect, useState } from 'react';
import './radio.scss';
import classnames from 'classnames';


export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'size' | 'checked'> {
  disabled?: boolean,
  size?: 'small' | 'medium' | 'large',
  value?: boolean,
  label?: string,
  onChange?: (value: boolean) => void,
}


export const Radio: React.FC<RadioProps> = ({
  disabled, size, value, label, className, onChange, ...props
}) => {
  const [checked, setChecked] = useState<boolean>(value || false)

  useEffect(
    () => {
      if (typeof value === 'boolean') {
        setChecked(value)
      }
    },
    [value]
  )

  const inputClasses = classnames(
    'Radio',
    {
      'Radio--disabled': disabled,
      'Radio--small': size === 'small',
      'Radio--medium': size === 'medium',
      'Radio--large': size === 'large',
      'Radio--checked': checked
    },
    className
  );

  const labelClasses = classnames(
    'RadioLabel',
    {
      'RadioLabel--small': size === 'small',
      'RadioLabel--medium': size === 'medium',
      'RadioLabel--large': size === 'large',
    }
  )

  const onChangeHandler = (e) => {
    console.log(e.target.checked, 'sssssss')
    setChecked(e.target.checked)
    onChange?.(e.target.checked)
  }

  return (
    <label className={labelClasses}>
      <input
        {...props}
        className={inputClasses}
        disabled={disabled}
        type='radio'
        checked={typeof value === 'boolean' ? value : checked}
        onChange={onChangeHandler} />
      {label ? <span className='radioLabelText'>{label}</span> : null}
    </label>
  );
}
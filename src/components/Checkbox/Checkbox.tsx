import React, { useEffect, useState } from 'react';
import './checkbox.scss';
import classnames from 'classnames';


export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'size' | 'checked'> {
  disabled?: boolean,
  size?: 'small' | 'medium' | 'large',
  value?: boolean,
  label?: string,
  onChange?: (value: boolean) => void,
}


export const Checkbox: React.FC<CheckboxProps> = ({
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
    'Checkbox',
    {
      'Checkbox--disabled': disabled,
      'Checkbox--small': size === 'small',
      'Checkbox--medium': size === 'medium',
      'Checkbox--large': size === 'large',
      'Checkbox--checked': checked
    },
    className
  );

  const labelClasses = classnames(
    'CheckboxLabel',
    {
      'CheckboxLabel--small': size === 'small',
      'CheckboxLabel--medium': size === 'medium',
      'CheckboxLabel--large': size === 'large',
    }
  )

  const onChangeHandler = (e) => {
    setChecked(e.target.checked)
    onChange?.(e.target.checked)
  }

  return (
    <label className={labelClasses}>
      <input
        {...props}
        className={inputClasses}
        disabled={disabled}
        type='checkbox'
        checked={typeof value === 'boolean' ? value : checked}
        onChange={onChangeHandler} />
      {label ? <span className='checkboxLabelText'>{label}</span> : null}
    </label>
  );
}
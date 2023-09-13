import React from 'react';
import './radioGroup.scss';
import { Option, Size } from '../../types';
import { Radio } from '../Radio/Radio';
import classnames from 'classnames';

export interface RadioGroupProps {
  size?: Size,
  options: Option[],
  selectedValue: string,
  onSelect: (selectedValue: string) => void,
  className?: string
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  size, options, selectedValue, onSelect, className
}) => {

  const handleRadioChange = (elValue: string) => () => {
    console.log(onSelect, 'onSelect')
    onSelect(elValue)
  }

  return (
    <ul className={classnames('radioGroup', className)}>
      {options.map((el) => (
        <li className='radioItem' key={el.value}>
          <Radio
            label={el.label}
            disabled={el.disabled}
            size={size}
            onChange={handleRadioChange(el.value)}
            value={selectedValue === el.value}
          />
        </li>
      ))}
    </ul>
  );
}

import React from 'react';
import { Option, Size } from '../../types';
import { Radio } from '../Radio/Radio';
import classnames from 'classnames';
import style from './radioGroup.module.scss';

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
    onSelect(elValue)
  }

  return (
    <ul className={classnames(style.radioGroup, className)}>
      {options.map((el) => (
        <li className={style.radioItem} key={el.value}>
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

import React from 'react';
import { Option, ElementSize } from '../../types';
import { Radio } from '../Radio/Radio';
import classnames from 'classnames';
import styles from './radioGroup.module.scss';

export interface RadioGroupProps {
  size?: ElementSize;
  options: Option[];
  selectedValue: string;
  onSelect: (selectedValue: string) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  size,
  options,
  selectedValue,
  onSelect,
  className,
}) => {
  const handleRadioChange = (elValue: string) => () => {
    onSelect(elValue);
  };

  return (
    <ul className={classnames(styles.radioGroup, className)}>
      {options.map((el) => (
        <li className={styles.radioItem} key={el.value}>
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
};

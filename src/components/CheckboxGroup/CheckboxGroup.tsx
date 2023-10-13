import React from 'react';
import { Option, ElementSize } from '../../types';
import { Checkbox } from '../Checkbox/Checkbox';
import styles from './checkboxGroup.module.scss';
import classnames from 'classnames';

export interface CheckboxGroupProps {
  size?: ElementSize;
  options: Option[];
  selectedValues: string[];
  onSelect: (selectedValues: string[]) => void;
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  size,
  options,
  selectedValues,
  onSelect,
  className,
}) => {
  const handleCheckboxChange = (elValue: string) => () => {
    if (selectedValues.includes(elValue)) {
      onSelect(selectedValues.filter((el) => el !== elValue));
    } else {
      onSelect([...selectedValues, elValue]);
    }
  };

  return (
    <ul className={classnames(styles.checkboxGroup, className)}>
      {options.map((el) => (
        <li className={styles.checkboxItem} key={el.value}>
          <Checkbox
            label={el.label}
            disabled={el.disabled}
            size={size}
            onChange={handleCheckboxChange(el.value)}
            value={selectedValues.includes(el.value)}
          />
        </li>
      ))}
    </ul>
  );
};

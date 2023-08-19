import React from 'react';
import './checkboxGroup.scss';
import { Option, Size } from '../../types';
import { Checkbox } from '../Checkbox/Checkbox';

export interface CheckboxGroupProps {
  size?: Size,
  options: Option[],
  selectedValues: string[],
  onSelect: (selectedValues: string[]) => void,
  className?: string
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  size, options, selectedValues, onSelect, className
}) => {

  const handleCheckboxChange = (elValue: string) => {
    return () => {
      if (selectedValues.includes(elValue)) {
        const updatedArray = selectedValues.filter((el) => el !== elValue)
        onSelect(updatedArray)
      } else {
        const updatedArray = [...selectedValues, elValue]
        onSelect(updatedArray)
      }
    }
  }

  return (
    <div className='checkboxGroup'>{options.map((el) => {
      return (
        <li className='checkboxItem' key={el.value}>
          <Checkbox label={el.label} disabled={el.disabled} size={size} onChange={handleCheckboxChange(el.value)} value={selectedValues.includes(el.value)} />
        </li>
      )
    })}</div>
  );
}

import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './select.module.scss';
import { Option, Size } from '../../types';
import { Input } from '../Input';
import classNames from 'classnames';

export interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  size?: Size;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange, size = 'medium' }) => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [selectedOptionValue, setSelectedOptionValue] = useState(value || null);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current?.contains(event.target)) {
        setIsSelectOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  const openSelect = useCallback(() => {
    setIsSelectOpen(true);
  }, []);

  const handleItemClick = useCallback(
    (e) => {
      onChange?.(e.target.dataset.itemValue);
      setSelectedOptionValue(e.target.dataset.itemValue);
      setIsSelectOpen(false);
    },
    [onChange]
  );

  const getOptionLabel = (options, value) => {
    const selectedOption = options.find((el) => {
      return el.value === value;
    });

    return selectedOption?.label || '';
  };

  const listItemClasses = classNames(style.selectListItem, {
    [style['selectListItem--small']]: size === 'small',
    [style['selectListItem--medium']]: size === 'medium',
    [style['selectListItem--large']]: size === 'large',
  });

  const listClasses = classNames(style.optionsList, {
    [style['optionsList--small']]: size === 'small',
    [style['optionsList--medium']]: size === 'medium',
    [style['optionsList--large']]: size === 'large',
  });

  return (
    <div className={style.componentWrapper} ref={ref}>
      <Input
        placeholder='select needed option'
        onFocus={openSelect}
        icon={isSelectOpen ? 'chevronUp' : 'chevronDown'}
        value={getOptionLabel(options, selectedOptionValue)}
        readOnly
        size={size}
      />
      {isSelectOpen ? (
        <ul className={listClasses}>
          {options.map((el) => (
            <li
              className={listItemClasses}
              data-item-value={el.value}
              key={el.value}
              onClick={handleItemClick}
            >
              {el.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

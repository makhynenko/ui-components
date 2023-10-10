import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './select.module.scss';
import { Option, Size } from '../../types';
import { Input } from '../Input';
import classNames from 'classnames';

export interface SelectProps {
  options: Option[];
  value?: string;
  // onChange?: () => void;
  size?: Size;
}

export const Select: React.FC<SelectProps> = ({ options, value, size = 'medium' }) => {
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

  const handleSelectClick = useCallback(() => {
    setIsSelectOpen(true);
  }, []);

  const handleItemClick = useCallback((e) => {
    setSelectedOptionValue(e.target.getAttribute('data-item-value'));
    setIsSelectOpen(false);
  }, []);

  const getOptionLabel = (options, selectedOptionValue) => {
    const placeholder = options.find((el) => {
      return el.value === selectedOptionValue;
    });

    return placeholder?.label || '';
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
        onFocus={handleSelectClick}
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

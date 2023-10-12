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
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  size = 'medium',
  className,
}) => {
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

  useEffect(() => {
    if (value !== undefined) {
      setSelectedOptionValue(value);
    }
  }, [value]);

  const openSelect = useCallback(() => {
    setIsSelectOpen(true);
  }, []);

  const onSelectItem = useCallback(
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

  const wrapperClasses = classNames(
    style.componentWrapper,
    {
      [style['componentWrapper--selectOpen']]: isSelectOpen,
      [style['componentWrapper--selectClose']]: !isSelectOpen,
    },
    className
  );

  return (
    <div className={wrapperClasses} ref={ref}>
      <Input
        placeholder='select needed option'
        onFocus={openSelect}
        icon='chevronDown'
        value={getOptionLabel(options, selectedOptionValue)}
        readOnly
        size={size}
        iconPosition='end'
      />
      {isSelectOpen ? (
        <ul className={listClasses}>
          {options.map((el) => (
            <li
              className={listItemClasses}
              data-item-value={el.value}
              key={el.value}
              onClick={onSelectItem}
            >
              {el.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

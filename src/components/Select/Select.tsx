import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './select.module.scss';
import { Option, ElementSize } from '../../types';
import { Input } from '../Input';

import classNames from 'classnames';

export interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  size?: ElementSize;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  size = ElementSize.Medium,
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

  const selectedOptionLabel = useMemo(() => {
    const selectedOption = options.find((el) => {
      return el.value === selectedOptionValue;
    });

    return selectedOption?.label || '';
  }, [options, selectedOptionValue]);

  const getListItemClasses = useCallback(
    (value) => {
      return classNames(styles.selectListItem, {
        [styles['selectListItem--small']]: size === ElementSize.Small,
        [styles['selectListItem--medium']]: size === ElementSize.Medium,
        [styles['selectListItem--large']]: size === ElementSize.Large,
        [styles['selectListItem--isChosen']]: selectedOptionValue === value,
      });
    },
    [selectedOptionValue, size]
  );

  const listClasses = classNames(styles.optionsList, {
    [styles['optionsList--small']]: size === ElementSize.Small,
    [styles['optionsList--medium']]: size === ElementSize.Medium,
    [styles['optionsList--large']]: size === ElementSize.Large,
  });

  const wrapperClasses = classNames(
    styles.componentWrapper,
    {
      [styles['componentWrapper--selectOpen']]: isSelectOpen,
      [styles['componentWrapper--selectClose']]: !isSelectOpen,
    },
    className
  );

  return (
    <div className={wrapperClasses} ref={ref}>
      <Input
        className={styles.inputWrapper}
        placeholder='select needed option'
        onFocus={openSelect}
        icon='chevronDown'
        value={selectedOptionLabel}
        readOnly
        size={size}
        iconPosition='end'
      />
      {isSelectOpen ? (
        <ul className={listClasses}>
          {options.map((el) => (
            <li
              className={getListItemClasses(el.value)}
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

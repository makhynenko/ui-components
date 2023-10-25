import React from 'react';
import { Icons } from '../../Icons';
import cn from 'classnames';

import { ITableFilterProps } from '..';

import styles from '../Table.module.scss';

const Filter: React.FC<ITableFilterProps> = ({
  columnKey,
  isActive,
  dataTestId = `filter-${columnKey}`,
  className,
}) => {
  return (
    <div
      data-testid={dataTestId}
      className={cn(
        { [styles.filter]: !isActive },
        { [styles.filterActive]: isActive },
        'margin-left-2',
        'padding-t-1',
        className
      )}
    >
      <Icons name='burger' size={16} />
    </div>
  );
};

export default Filter;

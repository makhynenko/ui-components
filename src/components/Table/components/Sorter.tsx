import React, { useMemo } from 'react';

import { Icons } from '../../Icons';
import cn from 'classnames';

// import { onKeyEnter } from '../../../utils';
import styles from '../Table.module.scss';
import { ITableSorterProps, TableSortOrder } from '../types';

const getNextSortDirection = (sortDirection: TableSortOrder) => {
  return sortDirection === TableSortOrder.Asc ? TableSortOrder.Desc : TableSortOrder.Asc;
};

const Sorter: React.FC<ITableSorterProps> = (props) => {
  const toggleSorting = () => {
    props?.onSort?.({
      field: props.columnKey,
      direction:
        props.columnKey === props.sorting?.field
          ? getNextSortDirection(props.sorting.direction)
          : TableSortOrder.Desc,
    });
  };

  const isActive = useMemo(
    () => props.columnKey === props.sorting?.field,
    [props.columnKey, props.sorting]
  );

  const direction = useMemo<TableSortOrder | null>(
    () => (isActive ? props.sorting?.direction || null : null),
    [isActive, props.sorting]
  );

  return (
    <div
      onClick={toggleSorting}
      data-testid={props.dataTestId}
      className={cn(
        styles.sorter,
        { [styles.active]: isActive },
        'margin-left-2',
        'padding-t-1',
        props.className
      )}
      // onKeyDown={onKeyEnter(toggleSorting)}
      role='button'
      tabIndex={0}
    >
      <Icons name={direction === TableSortOrder.Asc ? 'burger' : 'burger'} size={16} />
    </div>
  );
};

export default Sorter;

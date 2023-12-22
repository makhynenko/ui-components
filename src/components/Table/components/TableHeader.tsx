import React, { useCallback } from 'react';

import cn from 'classnames';

import { ITableColumn, ITableHeaderProps } from '..';

import styles from '../Table.module.scss';
// import Sorter from './Sorter';

/**
 * Table Header columns rendering strategy:
 * - sticky columns rendered separately at root level for top-most fixation
 * - all other columns wrapped inside scrollable container:
 * - - shadow copies of sticky column without content to keep correct alignment
 * - - the rest of regular columns
 */
const TableHeader = <T extends Record<string, any>>(props: ITableHeaderProps<T>) => {
  // const { onSort, sorting } = props;
  const renderHeaderCell = useCallback((column: ITableColumn<T>) => {
    return (
      <>
        {column.renderTitle ? (
          column.renderTitle()
        ) : (
          <div className={styles.cellValue}>{column.title}</div>
        )}
        {/* {column.sortable && (
            <Sorter
              dataTestId={`${props.dataTestId}-sorter-${column.key}`}
              sorting={sorting}
              columnKey={column.key}
              onSort={onSort}
            />
          )} */}
      </>
    );
  }, []);

  return (
    <div
      className={`${styles.headerContainer} notes-default`}
      // data-testid={props.dataTestId}
      style={{ lineHeight: `${props.height}px` }}
    >
      {props.hasStickyColumns &&
        props.columns
          .filter((c) => c.sticky)
          .map((c) => (
            <div
              data-testid={`${props.dataTestId}-sticky-${c.key}`}
              className={cn(styles.headerCell, styles.sticky, 'padding-x-4', {
                [styles.lastStickyCell]: props.scrolledHorizontally && c.$isLastSticky,
              })}
              key={c.key}
              role='columnheader'
              style={{
                ...c.titleStyle,
                width: c.width,
                left: c.$stickyOffset,
                height: props.height,
              }}
            >
              {renderHeaderCell(c)}
            </div>
          ))}
      <div
        className={styles.header}
        style={{
          height: props.height,
          width: props.width,
        }}
        ref={props.headerRef}
      >
        {props.columns.map((c) =>
          c.sticky ? (
            <div
              // data-testid={`${props.dataTestId}-shadow-${c.key}`}
              className={`${styles.headerCell} padding-x-4`}
              key={c.key}
              style={{ ...c.titleStyle, width: c.width }}
            >
              &nbsp;
            </div>
          ) : (
            <div
              // data-testid={`${props.dataTestId}-column-${c.key}`}
              className={`${styles.headerCell} padding-x-4`}
              key={c.key}
              role='columnheader'
              style={{ ...c.titleStyle, width: c.width }}
            >
              {renderHeaderCell(c)}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TableHeader;

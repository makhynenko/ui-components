import React, { ReactElement } from 'react';

const DEFAULT_COLUMN_WIDTH = 100;

// enum TableSortOrder {
//   Asc = 'ASC',
//   Desc = 'DESC',
// }

// interface ITableSort<T = string> {
//   direction: TableSortOrder;
//   field: T;
// }

interface ITableSystemFields {
  $isExpanded: boolean;
  $rowKey: string;
}

type ITableRecord<T> = T & ITableSystemFields;

type ITableRecordKey<T> = string | ((record: ITableRecord<T> | T) => string);

interface ITableColumn<T> {
  $isLastSticky?: boolean;
  $stickyOffset?: number;
  cellStyle?: React.CSSProperties | ((record: ITableRecord<T>) => React.CSSProperties); //! Check
  dataIndex?: keyof T;
  key: string;
  // default is 100 relative points
  width?: number | string;
  minWidth?: string;
  renderCell?: (record: ITableRecord<T>) => ReactElement | string; //! Check
  renderTitle?: () => ReactElement | string; //! Check
  sticky?: boolean;
  // absolute value like '120px'
  title?: string;
  titleStyle?: React.CSSProperties; //! Check
}

interface ITableHeaderProps<T> {
  columns: ITableColumn<T>[];
  dataTestId?: string;
  hasStickyColumns: boolean;
  headerRef: React.MutableRefObject<HTMLDivElement | null>;
  height?: number;
  scrolledHorizontally?: boolean;
  width: number;
  // sorting?: ITableSort;
  // onSort?: (sorting: ITableSort) => void;
}

interface ITableRowProps<T> {
  record: T;
  width: number;
}

interface ITableRowComponentProps<T> {
  columns: ITableColumn<T>[];
  dataTestId?: string;
  expandableContent?: (data: ITableRecord<T>) => JSX.Element;
  onSelectRow?: (data: T) => void;
  record: ITableRecord<T>;
  rowHeight?: number;
  rowKey: ITableRecordKey<T>;
  scrolledHorizontally?: boolean;
  width: number;
}

interface ITableBodyProps<T> {
  columns: ITableColumn<T>[];
  dataList?: ITableRecord<T>[];
  dataTestId?: string;
  emptyState?: ReactElement;
  expandableContent?: (record: ITableRecord<T>) => JSX.Element;
  fetchMore?: () => void;
  hasMore?: boolean;
  headerHeight?: number;
  isLoading?: boolean;
  isScrollable: boolean;
  loader?: ReactElement;
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  onSelectRow?: (data: T) => void;
  rowHeight?: number;
  rowKey: ITableRecordKey<T>;
  scrolledHorizontally?: boolean;
  tableBody?: React.ComponentType<ITableBodyProps<T>> | null;
  width: number;
  // sorting?: ITableSort;
  // onSort?: (sorting: ITableSort) => void;
}

interface ITableProps<T> {
  className?: string;
  columns: ITableColumn<T>[];
  dataList?: T[];
  dataTestId?: string;
  emptyState?: ReactElement;
  expandableContent?: (record: ITableRecord<T>) => JSX.Element;
  expandedRowKeys?: string[];
  fetchMore?: () => void;
  hasMore?: boolean;
  headerHeight?: number;
  isLoading?: boolean;
  loader?: ReactElement;
  onScroll?: (event: React.UIEvent) => void;
  onSelectRow?: (data: T) => void;
  rowHeight?: number;
  rowKey: ITableRecordKey<T>;
  style?: React.CSSProperties;
  tableBody?: React.ComponentType<ITableBodyProps<T>> | null;
  // onSort?: (sorting: ITableSort) => void;
  // sorting?: ITableSort;
}

interface ITableCellProps<T> {
  className?: string;
  column: ITableColumn<T>;
  dataTestId?: string;
  record: ITableRecord<T>;
}

// interface ITableSorterProps {
//   className?: string;
//   columnKey: string;
//   dataTestId?: string;
//   onSort?: (sorting: ITableSort) => void;
//   sorting?: ITableSort;
// }

interface ITableFilterProps {
  className?: string;
  columnKey: string;
  dataTestId?: string;
  isActive?: boolean;
}

export {
  DEFAULT_COLUMN_WIDTH,
  ITableBodyProps,
  ITableCellProps,
  ITableColumn,
  ITableFilterProps,
  ITableHeaderProps,
  ITableProps,
  ITableRecord,
  ITableRecordKey,
  ITableRowProps,
  ITableSystemFields,
  ITableRowComponentProps,
  // ITableSort,
  // ITableSorterProps,
  // TableSortOrder,
};

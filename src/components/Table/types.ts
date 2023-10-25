import React, { ReactElement } from 'react';

const DEFAULT_COLUMN_WIDTH = 100;

enum TableSortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

interface ITableSort<T = string> {
  direction: TableSortOrder;
  field: T;
}

interface ITableSystemFields {
  $isExpanded: boolean;
  $rowKey: string;
}

type ITableRecord<T> = T & ITableSystemFields;

type ITableRecordKey<T> = string | ((record: ITableRecord<T> | T) => string);

interface ITableColumn<T> {
  $isLastSticky?: boolean;
  $stickyOffset?: number;
  cellStyle?: React.CSSProperties | ((record: ITableRecord<T>) => React.CSSProperties);
  dataIndex?: keyof T;
  key: string;
  // default is 100 relative points
  minWidth?: string;
  renderCell?: (record: ITableRecord<T>) => ReactElement | string;
  renderTitle?: () => ReactElement | string;
  sortable?: boolean;
  sticky?: boolean;
  // absolute value like '120px'
  title?: string;
  titleStyle?: React.CSSProperties;
  width?: number | string;
}

interface ITableHeaderProps<T> {
  columns: ITableColumn<T>[];
  dataTestId?: string;
  hasStickyColumns: boolean;
  headerRef: React.MutableRefObject<HTMLDivElement | null>;
  height?: number;
  onSort?: (sorting: ITableSort) => void;
  scrolledHorizontally?: boolean;
  sorting?: ITableSort;
  width: number;
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
  onSort?: (sorting: ITableSort) => void;
  rowHeight?: number;
  rowKey: ITableRecordKey<T>;
  scrolledHorizontally?: boolean;
  sorting?: ITableSort;
  tableBody?: React.ComponentType<ITableBodyProps<T>> | null;
  width: number;
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
  onSort?: (sorting: ITableSort) => void;
  rowHeight?: number;
  rowKey: ITableRecordKey<T>;
  sorting?: ITableSort;
  style?: React.CSSProperties;
  tableBody?: React.ComponentType<ITableBodyProps<T>> | null;
}

interface ITableCellProps<T> {
  className?: string;
  column: ITableColumn<T>;
  dataTestId?: string;
  record: ITableRecord<T>;
}

interface ITableSorterProps {
  className?: string;
  columnKey: string;
  dataTestId?: string;
  onSort?: (sorting: ITableSort) => void;
  sorting?: ITableSort;
}

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
  ITableSort,
  ITableSorterProps,
  ITableSystemFields,
  ITableRowComponentProps,
  TableSortOrder,
};

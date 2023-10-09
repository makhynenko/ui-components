export type Size = 'small' | 'medium' | 'large';

export enum PopoverTrigger {
  Hover = 'hover',
  Click = 'click',
}

export enum PopoverPosition {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export enum PopoverAlign {
  Start = 'start',
  Center = 'center',
  End = 'end',
}
export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

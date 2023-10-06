export type Size = 'small' | 'medium' | 'large';
export type PopoverPositionType = 'top' | 'right' | 'bottom' | 'left';
export type PopoverAlignType = 'start' | 'center' | 'end';
export type PopoverWidthType = '100px' | '150px' | '300px';
export type PopoverTriggerType = 'hover' | 'click';
export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

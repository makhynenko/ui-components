export enum ElementSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

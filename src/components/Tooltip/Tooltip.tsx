import React, { ReactNode } from 'react';
import { Popover } from '../Popover/Popover';
import { PopoverAlign, PopoverPosition, PopoverTrigger } from '../../types';

export interface TooltipProps {
  text: string;
  position?: PopoverPosition;
  align?: PopoverAlign;
  width?: string;
  children?: ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = PopoverPosition.Top,
  align = PopoverAlign.Center,
  width,
  children,
}) => {
  return (
    <Popover
      position={position}
      trigger={PopoverTrigger.Hover}
      isOpen={false}
      align={align}
      width={width}
      content={<span>{text}</span>}
    >
      {children}
    </Popover>
  );
};

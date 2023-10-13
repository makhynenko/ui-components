import React from 'react';
import { Popover } from '../Popover/Popover';
import { PopoverAlign, PopoverPosition, PopoverTrigger } from '../../types';

export interface TooltipProps {
  text: string;
  position?: PopoverPosition;
  align?: PopoverAlign;
  width?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = PopoverPosition.Top,
  align = PopoverAlign.Center,
  width,
  children,
}) => {
  return (
    <div>
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
    </div>
  );
};

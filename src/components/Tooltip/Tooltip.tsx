import React from 'react';
import { Popover } from '../Popover/Popover';

export interface TooltipProps {
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  width?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  position = 'top',
  align = 'center',
  width,
  children,
}) => {
  return (
    <div>
      <Popover
        position={position}
        trigger='hover'
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

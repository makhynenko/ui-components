import React, { useState } from 'react';
import styles from './popover.module.scss';
import { Popover as NpmPopover, ContentRenderer, ArrowContainer } from 'react-tiny-popover';

export interface PopoverProps {
  isOpen?: boolean;
  trigger?: 'click' | 'hover';
  content: JSX.Element | ContentRenderer;
  hasArrow?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
  backgroundColor?: string;
  align?: 'start' | 'center' | 'end';
  width?: string;
  offset?: number;
}

// eslint-disable-next-line react/display-name
const CustomComponent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  (props, ref) => {
    return (
      <div
        className={styles.PopoverCaller}
        ref={ref}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
      >
        {props.children}
      </div>
    );
  }
);

export const Popover: React.FC<PopoverProps> = ({
  isOpen,
  trigger = 'hover',
  content,
  hasArrow = 'true',
  position = 'left',
  align = 'center',
  backgroundColor = '#000',
  width = '400px',
  offset = 0,
  ...props
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  const handleClick = () => {
    trigger === 'click' ? setIsPopoverOpen(!isPopoverOpen) : null;
  };

  const handleMouseEnter = () => {
    trigger === 'hover' ? setIsPopoverOpen(true) : null;
  };

  const handleMouseLeave = () => {
    trigger === 'hover' ? setIsPopoverOpen(false) : null;
  };

  const countPaddings = (position) => {
    return position === 'top' || position === 'bottom'
      ? { padding: '8px 0' }
      : { padding: '0 8px' };
  };

  return (
    <NpmPopover
      isOpen={isPopoverOpen}
      positions={[position, 'left', 'top', 'right', 'bottom']}
      padding={offset}
      align={align}
      reposition={true}
      onClickOutside={() => setIsPopoverOpen(false)}
      containerClassName={styles.Popover}
      containerStyle={{ maxWidth: width }}
      content={({ position, childRect, popoverRect }) => {
        if (hasArrow) {
          return (
            <ArrowContainer
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor={backgroundColor}
              arrowSize={8}
              style={countPaddings(position)}
              className='popover-arrow-container'
              arrowClassName='popover-arrow PopoverArrow'
            >
              <div
                className={styles.PopoverWrapper}
                style={{ backgroundColor: `${backgroundColor}`, color: '#FFF' }}
              >
                {content}
              </div>
            </ArrowContainer>
          );
        } else {
          return (
            <div
              className={styles.PopoverWrapper}
              style={{ backgroundColor: `${backgroundColor}`, color: '#FFF' }}
            >
              {content}
            </div>
          );
        }
      }}
    >
      <CustomComponent
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.children}
      </CustomComponent>
    </NpmPopover>
  );
};

export default Popover;

import React from 'react';
import classnames from 'classnames';
import style from './sidebar.module.scss';

export interface SidebarProps {
  className?: string;
  children?: any;
  isOpen: boolean;
  onClose?: () => void;
  direction?: 'left' | 'right';
  width?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  children,
  onClose,
  className,
  direction = 'left',
  width = '200px',
}) => {
  const sidebarClasses = classnames(
    style.Sidebar,
    {
      [style['Sidebar--isOpen']]: isOpen,
    },
    className
  );

  const sidebarOverlayClasses = classnames(
    style.SidebarOverlay,
    {
      [style['SidebarOverlay--left']]: direction === 'left',
      [style['SidebarOverlay--right']]: direction === 'right',
    },
    className
  );

  const handleOutsideClick = (e) => {
    onClose?.();
  };

  return (
    <div className={sidebarOverlayClasses} onClick={handleOutsideClick}>
      <div
        className={sidebarClasses}
        style={{ maxWidth: width }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

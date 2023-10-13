import React, { useEffect, useMemo, useState } from 'react';
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
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }
  }, [isOpen]);

  const sidebarClasses = useMemo(
    () =>
      classnames(
        style.Sidebar,
        {
          [style['sidebarClasses--In']]: isOpen,
          [style['sidebarClasses--Out']]: !isOpen,
        },
        className
      ),
    [isOpen, className]
  );

  const sidebarOverlayClasses = useMemo(
    () =>
      classnames(style.SidebarOverlay, {
        [style['SidebarOverlay--In']]: isOpen,
        [style['SidebarOverlay--Out']]: !isOpen,
        [style['SidebarOverlay--left']]: direction === 'left',
        [style['SidebarOverlay--right']]: direction === 'right',
      }),
    [isOpen, direction]
  );

  const handleOutsideClick = (e) => {
    onClose?.();
  };

  return (
    <>
      {isMounted ? (
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
      ) : null}
    </>
  );
};

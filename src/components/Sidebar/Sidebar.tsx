import React, { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import styles from './sidebar.module.scss';

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
      // setTimeout(() => {
      setIsMounted(false);
      // }, 300);
    }
  }, [isOpen]);

  const sidebarClasses = useMemo(
    () =>
      classnames(
        styles.Sidebar,
        {
          [styles['Sidebar--In']]: isOpen,
          [styles['Sidebar--Out']]: !isOpen,
          [styles['Sidebar--left']]: direction === 'left',
          [styles['Sidebar--right']]: direction === 'right',
        },
        className
      ),
    [isOpen, direction, className]
  );

  const sidebarOverlayClasses = useMemo(
    () =>
      classnames(styles.SidebarOverlay, {
        [styles['SidebarOverlay--In']]: isOpen,
        [styles['SidebarOverlay--Out']]: !isOpen,
        [styles['SidebarOverlay--left']]: direction === 'left',
        [styles['SidebarOverlay--right']]: direction === 'right',
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

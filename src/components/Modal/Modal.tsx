import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import styles from './modal.module.scss';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  zIndex?: number;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, className, zIndex }) => {
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

  const modalClasses = useMemo(
    () =>
      classnames(
        styles.Modal,
        {
          [styles['Modal--In']]: isOpen,
          [styles['Modal--Out']]: !isOpen,
        },
        className
      ),
    [isOpen, className]
  );

  const overlayClasses = useMemo(
    () =>
      classnames(styles.ModalOverlay, {
        [styles['ModalOverlay--In']]: isOpen,
        [styles['ModalOverlay--Out']]: !isOpen,
      }),
    [isOpen]
  );

  const handleOutsideClick = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <>
      {isMounted ? (
        <div className={overlayClasses} onClick={handleOutsideClick} style={{ zIndex: zIndex }}>
          <div
            className={modalClasses}
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

import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import style from './modal.module.scss';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, className }) => {
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
        style.Modal,
        {
          [style['Modal--In']]: isOpen,
          [style['Modal--Out']]: !isOpen,
        },
        className
      ),
    [isOpen, className]
  );

  const overlayClasses = useMemo(
    () =>
      classnames(style.ModalOverlay, {
        [style['ModalOverlay--In']]: isOpen,
        [style['ModalOverlay--Out']]: !isOpen,
      }),
    [isOpen]
  );

  const handleOutsideClick = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <>
      {isMounted ? (
        <div className={overlayClasses} onClick={handleOutsideClick}>
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

import React, { ReactNode, useEffect, useState } from 'react';
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
    if (!isOpen) {
      setTimeout(() => {
        setIsMounted(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setIsMounted(true);
      }, 0);
    }
  }, [isOpen]);

  const classes = classnames(
    style.Modal,
    {
      [style['Modal--In']]: isOpen,
      [style['Modal--Out']]: isOpen === false,
    },
    className
  );

  const overlayClassName = classnames(style.ModalOverlay, {
    [style['ModalOverlay--In']]: isOpen,
    [style['ModalOverlay--Out']]: isOpen === false,
  });

  const handleOutsideClick = () => {
    onClose?.();
  };

  return (
    <>
      {isMounted ? (
        <div className={overlayClassName} onClick={handleOutsideClick}>
          <div
            className={classes}
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

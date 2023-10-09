import React, { ReactNode } from 'react';
import classnames from 'classnames';
import style from './modal.module.scss';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, className }) => {
  const classes = classnames(
    style.Modal,
    {
      // [style['Modal--isOpen']]: isOpen,
      [style['Modal--In']]: isOpen,
      [style['Modal--Out']]: isOpen === false,
    },
    className
  );

  const handleOutsideClick = (e) => {
    onClose?.();
  };

  return (
    <div className={style.ModalOverlay} onClick={handleOutsideClick}>
      <div
        className={classes}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

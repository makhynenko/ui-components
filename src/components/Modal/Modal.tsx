import React from 'react';
import classnames from 'classnames';
import style from './modal.module.scss';

export interface ModalProps {
  className?: string;
  children?: any;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose, className }) => {
  const classes = classnames(
    style.Modal,
    {
      [style['Modal--isOpen']]: isOpen,
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

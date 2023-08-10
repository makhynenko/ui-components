import React from 'react';
import classnames from 'classnames';
import './modal.scss';

export interface ModalProps {
  className?: string,
  children?: any,
  isOpen: boolean,
  // onClose?: () => void,
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  className
}) => {
  const classes = classnames(
    'Modal',
    {
      'Modal--isOpen': isOpen
    },
    className
  );


  return (
    <div className='ModalOverlay'>
      <div className={classes} > {children}</div >
    </div>
  );
}

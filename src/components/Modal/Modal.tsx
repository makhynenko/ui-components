import React, { useRef } from 'react';
import classnames from 'classnames';
import './modal.scss';

export interface ModalProps {
  className?: string,
  children?: any,
  isOpen: boolean,
  onClose?: () => void,
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  onClose,
  className
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const classes = classnames(
    'Modal',
    {
      'Modal--isOpen': isOpen
    },
    className
  );

  const handleOutsideClick = (e) => {
    e.preventDefault()

    if (ref.current === e.target) {
      onClose?.()
    }
  }

  return (
    <div className='ModalOverlay' onClick={handleOutsideClick} ref={ref}>
      <div className={classes}> {children}</div >
    </div>
  );
}

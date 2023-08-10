import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';

storiesOf('Modal', module)
  .add('Default', () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openModal = () => {
      setIsOpen(true)
      console.log('set true')
    }

    const closeModal = () => {
      setIsOpen(false)
      console.log('set false')
    }

    return (
      <>
        <Button onClick={openModal}>{'Open modal'}</Button>
        {isOpen
          ? <Modal isOpen={isOpen}>
            <Button size='small' onClick={closeModal}>Close</Button>
            <h2>Modal title</h2>
            <p>Modal text</p>
          </Modal>
          : null}
      </>
    )
  }
  )

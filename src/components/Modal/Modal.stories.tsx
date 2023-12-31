import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';
import { ElementSize } from '../../types';

storiesOf('Modal', module).add('Default', () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Button size={ElementSize.Small} onClick={closeModal}>
          Close
        </Button>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </Modal>
    </>
  );
});

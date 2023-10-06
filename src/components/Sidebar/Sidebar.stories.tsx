import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Button } from '../Button';
import { Input } from '../Input';
import { RadioGroup } from '../RadioGroup';

storiesOf('Sidebar', module).add('Default', () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newMaxWidth, setNewMaxWidth] = useState('400px');

  const directionOptions = [
    { label: 'Direction left', value: 'left' },
    { label: 'Direction right', value: 'right' },
  ];
  const [newDirection, setNewDirection] = useState<'left' | 'right'>('left');

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleMaxWidthChange = (e) => {
    setNewMaxWidth(e.target.value);
  };

  const onPositionSelect = (newDirection) => {
    setNewDirection(newDirection);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <p>Try your max width - use number with `px` </p>
        <Input placeholder='Max-width: 400px' onChange={handleMaxWidthChange} />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <p>Try different directions:</p>
        <RadioGroup
          options={directionOptions}
          selectedValue={newDirection}
          onSelect={onPositionSelect}
          size='large'
        />
      </div>

      <Button onClick={openSidebar}>Open sidebar</Button>
      {isOpen ? (
        <Sidebar
          width={newMaxWidth}
          direction={newDirection}
          isOpen={isOpen}
          onClose={closeSidebar}
        >
          <Button onClick={closeSidebar} size='small'>
            Close
          </Button>
          <h2>What is Lorem Ipsum?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Sidebar>
      ) : null}
    </>
  );
});

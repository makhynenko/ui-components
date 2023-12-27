import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from './Loader';
import { Input } from '../Input';

storiesOf('Loader', module).add('Default', () => {
  const [newColor, setColor] = useState<string>('#000');
  const [newSize, setSize] = useState<number>(20);

  const onColorChange = (e) => {
    if (e.target.value.trim().length === 0) {
      setColor('black');
    } else {
      setColor(e.target.value);
    }
  };

  const onSizeChange = (e) => {
    if (e.target.value.trim().length === 0) {
      setSize(20);
    } else {
      setSize(e.target.value);
    }
  };
  return (
    <>
      <p>Default loader</p>
      <Loader />

      <p>You can customize size and color, if needed</p>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <Input placeholder={'Please insert color'} onChange={onColorChange} width='250px' />
        <Input
          placeholder={'Please insert size (number only)'}
          onChange={onSizeChange}
          width='250px'
        />
      </div>
      <Loader color={newColor} size={newSize} />
    </>
  );
});

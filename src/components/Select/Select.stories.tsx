import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './Select';
import { ElementSize } from '../../types';

storiesOf('Select', module).add('Default', () => {
  const selectOptions = [
    { label: 'string', value: 'str', disabled: false },
    { label: 'number', value: '123', disabled: false },
    { label: 'boolean', value: 'boo', disabled: false },
  ];

  const [newSelectedValue, setSelectedValue] = useState<string>('str');

  const onSelectChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Select options={selectOptions} />
        <Select options={selectOptions} invalid />
      </div>

      <p>Select different sizes</p>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Select options={selectOptions} size={ElementSize.Small} />
        <Select options={selectOptions} />
        <Select options={selectOptions} size={ElementSize.Large} />
      </div>

      <p>Select width value and onChange handler</p>
      <Select options={selectOptions} value={newSelectedValue} onChange={onSelectChange} />
    </>
  );
});

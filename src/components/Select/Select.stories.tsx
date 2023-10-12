import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './Select';

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
      <Select options={selectOptions} />

      <p>Select different sizes</p>
      <Select options={selectOptions} size='small' />
      <Select options={selectOptions} />
      <Select options={selectOptions} size='large' />

      <p>Select width value and onChange handler</p>
      <Select options={selectOptions} value={newSelectedValue} onChange={onSelectChange} />
    </>
  );
});

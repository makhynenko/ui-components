import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RadioGroup } from './RadioGroup';

storiesOf('RadioGroup', module).add('Default', () => {
  const optionsExample = [
    { label: 'string', value: 'str', disabled: false },
    { label: 'number', value: '123', disabled: false },
    { label: 'boolean', value: 'boo', disabled: false },
  ];

  const selectedValueExample = '123';
  const [selectedValue, setSelectedValue] = useState(selectedValueExample);

  const onSelect = (selectedValue) => {
    setSelectedValue(selectedValue);
  };

  return (
    <>
      <RadioGroup
        options={optionsExample}
        selectedValue={selectedValue}
        onSelect={onSelect}
        size='small'
      />
      <RadioGroup options={optionsExample} selectedValue={selectedValue} onSelect={onSelect} />
      <RadioGroup
        options={optionsExample}
        selectedValue={selectedValue}
        onSelect={onSelect}
        size='large'
      />
    </>
  );
});

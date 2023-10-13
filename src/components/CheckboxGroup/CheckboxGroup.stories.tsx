import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';
import { ElementSize } from '../../types';

storiesOf('CheckboxGroup', module).add('Default', () => {
  const optionsExample = [
    { label: 'string', value: 'str', disabled: false },
    { label: 'number', value: '123', disabled: false },
    { label: 'boolean', value: 'boo', disabled: true },
  ];

  const selectedValuesExample = [];

  const [selectedValues, setSelectedValues] = useState(selectedValuesExample);

  const onSelect = (selectedValues) => {
    setSelectedValues(selectedValues);
  };

  return (
    <>
      <CheckboxGroup
        options={optionsExample}
        selectedValues={selectedValues}
        onSelect={onSelect}
        size={ElementSize.Small}
      />
      <CheckboxGroup options={optionsExample} selectedValues={selectedValues} onSelect={onSelect} />
      <CheckboxGroup
        options={optionsExample}
        selectedValues={selectedValues}
        onSelect={onSelect}
        size={ElementSize.Large}
      />
    </>
  );
});

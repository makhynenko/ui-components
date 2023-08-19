import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { CheckboxGroup } from './CheckboxGroup';


storiesOf('CheckboxGroup', module)
  .add('Default', () => {

    const optionsExample = [
      { label: 'string', value: 'str', disabled: false },
      { label: 'number', value: '123', disabled: false },
      { label: 'boolean', value: 'boo', disabled: true }];

    const selectedValuesExample = [];

    const [updatedArray, setUpdatedArray] = useState(selectedValuesExample)

    const updateSelectedValues = (selectedValues) => {
      setUpdatedArray(selectedValues)
    }

    return (
      <>
        <CheckboxGroup options={optionsExample} selectedValues={updatedArray} onSelect={updateSelectedValues} size='large' />
      </>
    )
  })

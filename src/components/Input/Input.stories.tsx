import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

storiesOf('Input', module).add('Default', () => {
  const [currentValue, setCurrentValue] = useState<string>('');

  const onInputChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const onClear = () => {
    setCurrentValue('');
  };

  const wrapperStyles = { display: 'flex', gap: '16px', alignItems: 'center' };

  return (
    <>
      <p>small</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size='small' />
        <Input placeholder={'text'} size='small' invalid />
        <Input placeholder={'text'} size='small' disabled />
      </div>

      <p>medium</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size='medium' />
        <Input placeholder={'text'} size='medium' invalid />
        <Input placeholder={'text'} size='medium' disabled />
      </div>

      <p>large</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size='large' />
        <Input placeholder={'text'} size='large' invalid />
        <Input placeholder={'text'} size='large' disabled />
      </div>

      <p>WITH ICON START</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size='small' icon='burger' />
        <Input placeholder={'text'} size='medium' icon='alertCircle' invalid />
        <Input placeholder={'text'} size='large' icon='search' disabled />
      </div>

      <p>WITH ICON END</p>
      <div style={wrapperStyles}>
        <Input iconPosition='end' placeholder={'text'} size='small' icon='burger' />
        <Input iconPosition='end' placeholder={'text'} size='medium' icon='alertCircle' invalid />
        <Input iconPosition='end' placeholder={'text'} size='large' icon='search' disabled />
      </div>

      <p>WITH REMOVE ICON</p>
      <div style={wrapperStyles}>
        <Input
          placeholder={'text'}
          size='small'
          icon='burger'
          clearable
          onClear={onClear}
          onChange={onInputChange}
          value={currentValue}
        />
        <Input
          placeholder={'text'}
          size='medium'
          icon='clock'
          invalid
          clearable
          onClear={onClear}
          onChange={onInputChange}
          value={currentValue}
        />
        <Input
          placeholder={'text'}
          size='large'
          icon='search'
          clearable
          onClear={onClear}
          onChange={onInputChange}
          value={currentValue}
        />
      </div>

      <p>If input disabled, CLEAR icon is not shown</p>
      <Input
        placeholder={'text'}
        size='large'
        onClear={onClear}
        onChange={onInputChange}
        value={currentValue}
        icon='search'
        clearable
        disabled
      />

      <p>If iconPosition=`end`, CLEAR icon is not shown</p>
      <Input
        placeholder={'text'}
        size='large'
        onClear={onClear}
        onChange={onInputChange}
        value={currentValue}
        icon='search'
        iconPosition='end'
        clearable
      />
    </>
  );
});

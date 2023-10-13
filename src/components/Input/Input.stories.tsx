import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';
import { ElementSize } from '../../types';

storiesOf('Input', module).add('Default', () => {
  const [currentValue, setCurrentValue] = useState<string>('');

  const onInputChange = useCallback((e) => {
    setCurrentValue(e.target.value);
  }, []);

  const onClear = useCallback(() => {
    setCurrentValue('');
  }, []);

  const wrapperStyles = { display: 'flex', gap: '16px', alignItems: 'center' };

  return (
    <>
      <p>small</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size={ElementSize.Small} />
        <Input placeholder={'text'} size={ElementSize.Small} invalid />
        <Input placeholder={'text'} size={ElementSize.Small} disabled />
      </div>

      <p>medium</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size={ElementSize.Medium} />
        <Input placeholder={'text'} size={ElementSize.Medium} invalid />
        <Input placeholder={'text'} size={ElementSize.Medium} disabled />
      </div>

      <p>large</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size={ElementSize.Large} />
        <Input placeholder={'text'} size={ElementSize.Large} invalid />
        <Input placeholder={'text'} size={ElementSize.Large} disabled />
      </div>

      <p>WITH ICON START</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size={ElementSize.Small} icon='burger' />
        <Input placeholder={'text'} size={ElementSize.Medium} icon='alertCircle' invalid />
        <Input placeholder={'text'} size={ElementSize.Large} icon='search' disabled />
      </div>

      <p>WITH ICON END</p>
      <div style={wrapperStyles}>
        <Input iconPosition='end' placeholder={'text'} size={ElementSize.Small} icon='burger' />
        <Input
          iconPosition='end'
          placeholder={'text'}
          size={ElementSize.Medium}
          icon='alertCircle'
          invalid
        />
        <Input
          iconPosition='end'
          placeholder={'text'}
          size={ElementSize.Large}
          icon='search'
          disabled
        />
      </div>

      <p>WITH REMOVE ICON</p>
      <div style={wrapperStyles}>
        <Input
          placeholder={'text'}
          size={ElementSize.Small}
          icon='burger'
          clearable
          onClear={onClear}
          onChange={onInputChange}
          value={currentValue}
        />
        <Input
          placeholder={'text'}
          size={ElementSize.Medium}
          icon='clock'
          invalid
          clearable
          onClear={onClear}
          onChange={onInputChange}
          value={currentValue}
        />
        <Input
          placeholder={'text'}
          size={ElementSize.Large}
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
        size={ElementSize.Large}
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
        size={ElementSize.Large}
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

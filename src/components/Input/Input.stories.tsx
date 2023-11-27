import React, { useCallback, useRef, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';
import { ElementSize } from '../../types';
import { Button } from '../Button';

storiesOf('Input', module).add('Default', () => {
  const [currentValue, setCurrentValue] = useState<string>('');

  const myRef = useRef<HTMLInputElement>(null);

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
        <Input placeholder={'text'} size={ElementSize.Small} width='250px' />
        <Input placeholder={'text'} size={ElementSize.Small} width='250px' invalid />
        <Input placeholder={'text'} size={ElementSize.Small} width='250px' disabled />
      </div>

      <p>medium</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size={ElementSize.Medium} width='250px' />
        <Input placeholder={'text'} size={ElementSize.Medium} width='250px' invalid />
        <Input placeholder={'text'} size={ElementSize.Medium} width='250px' disabled />
      </div>

      <p>large</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size={ElementSize.Large} width='250px' />
        <Input placeholder={'text'} size={ElementSize.Large} width='250px' invalid />
        <Input placeholder={'text'} size={ElementSize.Large} width='250px' disabled />
      </div>

      <p>WITH ICON START</p>
      <div style={wrapperStyles}>
        <Input placeholder={'text'} size={ElementSize.Small} icon='burger' width='250px' />
        <Input
          placeholder={'text'}
          size={ElementSize.Medium}
          icon='alertCircle'
          width='250px'
          invalid
        />
        <Input placeholder={'text'} size={ElementSize.Large} icon='search' width='250px' disabled />
      </div>

      <p>WITH ICON END</p>
      <div style={wrapperStyles}>
        <Input
          iconPosition='end'
          placeholder={'text'}
          size={ElementSize.Small}
          icon='burger'
          width='250px'
        />
        <Input
          iconPosition='end'
          placeholder={'text'}
          size={ElementSize.Medium}
          icon='alertCircle'
          width='250px'
          invalid
        />
        <Input
          iconPosition='end'
          width='250px'
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
          width='250px'
          icon='burger'
          clearable={!!currentValue}
          onClear={onClear}
          onChange={onInputChange}
          value={currentValue}
        />
        <Input
          placeholder={'text'}
          size={ElementSize.Medium}
          icon='clock'
          invalid
          width='250px'
          clearable={!!currentValue}
          onClear={onClear}
          onChange={onInputChange}
          value={currentValue}
        />
        <Input
          placeholder={'text'}
          size={ElementSize.Large}
          icon='search'
          width='250px'
          clearable={!!currentValue}
          onClear={onClear}
          onChange={onInputChange}
          value={currentValue}
        />
      </div>

      <p>If input disabled, CLEAR icon is not shown</p>
      <Input
        placeholder={'text'}
        size={ElementSize.Large}
        width='250px'
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
        width='250px'
        onClear={onClear}
        onChange={onInputChange}
        value={currentValue}
        icon='search'
        iconPosition='end'
        clearable
      />

      <p>INPUT WITH ref</p>
      <Input
        ref={myRef}
        placeholder={'text'}
        size={ElementSize.Large}
        width='250px'
        onClear={onClear}
        onChange={onInputChange}
        value={currentValue}
        icon='search'
        iconPosition='end'
        clearable
      />
      <p></p>
      <Button
        onClick={() => {
          if (myRef?.current) {
            myRef.current.value = 'button ref';
          }
        }}
      >
        Set input value via ref
      </Button>

      <p>IMPORTANT INFO!</p>
      <p>You can set necessary width for input</p>
    </>
  );
});

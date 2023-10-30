import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ElementSize } from '../../types';
import { Textarea } from './Textarea';
import { Input } from '../Input';

storiesOf('Textarea', module).add('Default', () => {
  const [currentValue, setCurrentValue] = useState<string>('');
  const [width, setWidth] = useState('250px');
  const [rows, setRows] = useState(3);

  const onTextareaChange = useCallback((e) => {
    setCurrentValue(e.target.value);
  }, []);

  const onClear = useCallback(() => {
    setCurrentValue('');
  }, []);

  const handleWidthChange = useCallback((e) => {
    setWidth(e.target.value);
  }, []);

  const handleRowsChange = useCallback((e) => {
    setRows(e.target.value);
  }, []);

  const wrapperStyles = { display: 'flex', gap: '16px', alignItems: 'center' };
  const wrapperStylesInput = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    marginBottom: '16px',
  };

  return (
    <>
      <p>small</p>
      <div style={wrapperStyles}>
        <Textarea placeholder={'text'} size={ElementSize.Small} />
        <Textarea placeholder={'text'} size={ElementSize.Small} invalid />
        <Textarea placeholder={'text'} size={ElementSize.Small} disabled />
      </div>

      <p>medium</p>
      <div style={wrapperStyles}>
        <Textarea placeholder={'text'} size={ElementSize.Medium} />
        <Textarea placeholder={'text'} size={ElementSize.Medium} invalid />
        <Textarea placeholder={'text'} size={ElementSize.Medium} disabled />
      </div>

      <p>large</p>
      <div style={wrapperStyles}>
        <Textarea placeholder={'text'} size={ElementSize.Large} />
        <Textarea placeholder={'text'} size={ElementSize.Large} invalid />
        <Textarea placeholder={'text'} size={ElementSize.Large} disabled />
      </div>

      <p>Choose corect width and rows</p>
      <div style={wrapperStylesInput}>
        <Input
          placeholder={'choose width in px'}
          size={ElementSize.Small}
          onChange={handleWidthChange}
          width={width}
        />
        <Input
          style={{ marginBottom: '16px' }}
          placeholder={'choose rows'}
          size={ElementSize.Small}
          onChange={handleRowsChange}
          width={width}
        />
      </div>
      <div style={wrapperStyles}>
        <Textarea placeholder={'text'} size={ElementSize.Medium} rows={rows} width={width} />
      </div>

      <p>WITH REMOVE ICON</p>
      <div style={wrapperStyles}>
        <Textarea
          placeholder={'text'}
          size={ElementSize.Small}
          clearable={!!currentValue}
          onClear={onClear}
          onChange={onTextareaChange}
          value={currentValue}
        />
        <Textarea
          placeholder={'text'}
          size={ElementSize.Medium}
          invalid
          clearable={!!currentValue}
          onClear={onClear}
          onChange={onTextareaChange}
          value={currentValue}
        />
        <Textarea
          placeholder={'text'}
          size={ElementSize.Large}
          clearable={!!currentValue}
          onClear={onClear}
          onChange={onTextareaChange}
          value={currentValue}
        />
      </div>

      <p>If input disabled, CLEAR icon is not shown</p>
      <div style={wrapperStyles}>
        <Textarea
          placeholder={'text'}
          size={ElementSize.Medium}
          disabled
          clearable
          onClear={onClear}
          onChange={onTextareaChange}
          value={currentValue}
          width={width}
        />
      </div>
    </>
  );
});

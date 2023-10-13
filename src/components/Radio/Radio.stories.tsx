import React from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from './Radio';
import { useState } from 'react';
import { ElementSize } from '../../types';

storiesOf('Radio', module).add('Default', () => {
  const [value, setValue] = useState<boolean>(false);

  const onChange = (newValue: boolean) => {
    setValue(newValue);
  };

  const inlineStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  return (
    <>
      <p>Default === Medium</p>
      <div style={inlineStyles}>
        <Radio onChange={onChange} value={value} />
        <Radio onChange={onChange} value={value} />
        <Radio onChange={onChange} value={value} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio value={false} />
        <Radio value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio label='Lorem ipsum' onChange={onChange} value={true} />
        <Radio label='Lorem ipsum' onChange={onChange} value={false} />
        <Radio label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Radio label='Lorem ipsum' onChange={onChange} />

      <p>Small</p>
      <div style={inlineStyles}>
        <Radio size={ElementSize.Small} disabled />
        <Radio size={ElementSize.Small} disabled value={false} />
        <Radio size={ElementSize.Small} disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Radio size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Radio size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Radio size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Small} />
        <Radio size={ElementSize.Small} value={false} />
        <Radio size={ElementSize.Small} value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} value={true} />
        <Radio size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} value={false} />
        <Radio size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Radio size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} />

      <p>Medium</p>
      <div style={inlineStyles}>
        <Radio size={ElementSize.Medium} disabled />
        <Radio size={ElementSize.Medium} disabled value={false} />
        <Radio size={ElementSize.Medium} disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Radio size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Radio size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Radio size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Medium} />
        <Radio size={ElementSize.Medium} value={false} />
        <Radio size={ElementSize.Medium} value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} value={true} />
        <Radio size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} value={false} />
        <Radio size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Radio size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} />

      <p>Large</p>
      <div style={inlineStyles}>
        <Radio size={ElementSize.Large} disabled />
        <Radio size={ElementSize.Large} disabled value={false} />
        <Radio size={ElementSize.Large} disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Radio size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Radio size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Radio size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Large} />
        <Radio size={ElementSize.Large} value={false} />
        <Radio size={ElementSize.Large} value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} value={true} />
        <Radio size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} value={false} />
        <Radio size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Radio size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} />
    </>
  );
});

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from './Radio';
import { useState } from 'react';

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
        <Radio size='small' disabled />
        <Radio size='small' disabled value={false} />
        <Radio size='small' disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size='small' label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Radio size='small' label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Radio size='small' label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Radio size='small' label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Radio size='small' />
        <Radio size='small' value={false} />
        <Radio size='small' value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size='small' label='Lorem ipsum' onChange={onChange} value={true} />
        <Radio size='small' label='Lorem ipsum' onChange={onChange} value={false} />
        <Radio size='small' label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Radio size='small' label='Lorem ipsum' onChange={onChange} />

      <p>Medium</p>
      <div style={inlineStyles}>
        <Radio size='medium' disabled />
        <Radio size='medium' disabled value={false} />
        <Radio size='medium' disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size='medium' label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Radio size='medium' label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Radio size='medium' label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Radio size='medium' label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Radio size='medium' />
        <Radio size='medium' value={false} />
        <Radio size='medium' value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size='medium' label='Lorem ipsum' onChange={onChange} value={true} />
        <Radio size='medium' label='Lorem ipsum' onChange={onChange} value={false} />
        <Radio size='medium' label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Radio size='medium' label='Lorem ipsum' onChange={onChange} />

      <p>Large</p>
      <div style={inlineStyles}>
        <Radio size='large' disabled />
        <Radio size='large' disabled value={false} />
        <Radio size='large' disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size='large' label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Radio size='large' label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Radio size='large' label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Radio size='large' label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Radio size='large' />
        <Radio size='large' value={false} />
        <Radio size='large' value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Radio size='large' label='Lorem ipsum' onChange={onChange} value={true} />
        <Radio size='large' label='Lorem ipsum' onChange={onChange} value={false} />
        <Radio size='large' label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Radio size='large' label='Lorem ipsum' onChange={onChange} />
    </>
  );
});

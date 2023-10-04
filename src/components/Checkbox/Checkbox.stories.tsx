import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

storiesOf('Checkbox', module).add('Default', () => {
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
        <Checkbox />
        <Checkbox value={false} />
        <Checkbox value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox label='Lorem ipsum' onChange={onChange} value={true} />
        <Checkbox label='Lorem ipsum' onChange={onChange} value={false} />
        <Checkbox label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Checkbox label='Lorem ipsum' onChange={onChange} />

      <p>Small</p>
      <div style={inlineStyles}>
        <Checkbox size='small' disabled value={true} label='Lorem ipsum 1111' />

        <Checkbox size='small' disabled value={false} />
        <Checkbox size='small' disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size='small' label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Checkbox size='small' label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Checkbox size='small' label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Checkbox size='small' label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Checkbox size='small' />
        <Checkbox size='small' value={false} />
        <Checkbox size='small' value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size='small' label='Lorem ipsum' onChange={onChange} value={true} />
        <Checkbox size='small' label='Lorem ipsum' onChange={onChange} value={false} />
        <Checkbox size='small' label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Checkbox size='small' label='Lorem ipsum' onChange={onChange} />

      <p>Medium</p>
      <div style={inlineStyles}>
        <Checkbox size='medium' disabled />
        <Checkbox size='medium' disabled value={false} />
        <Checkbox size='medium' disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size='medium' label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Checkbox size='medium' label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Checkbox size='medium' label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Checkbox size='medium' label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Checkbox size='medium' />
        <Checkbox size='medium' value={false} />
        <Checkbox size='medium' value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size='medium' label='Lorem ipsum' onChange={onChange} value={true} />
        <Checkbox size='medium' label='Lorem ipsum' onChange={onChange} value={false} />
        <Checkbox size='medium' label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Checkbox size='medium' label='Lorem ipsum' onChange={onChange} />

      <p>Large</p>
      <div style={inlineStyles}>
        <Checkbox size='large' disabled />
        <Checkbox size='large' disabled value={false} />
        <Checkbox size='large' disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size='large' label='Lorem ipsum' onChange={onChange} disabled value={true} />
        <Checkbox size='large' label='Lorem ipsum' onChange={onChange} disabled value={false} />
        <Checkbox size='large' label='Lorem ipsum' onChange={onChange} disabled value={value} />
      </div>
      <br />
      <Checkbox size='large' label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Checkbox size='large' />
        <Checkbox size='large' value={false} />
        <Checkbox size='large' value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size='large' label='Lorem ipsum' onChange={onChange} value={true} />
        <Checkbox size='large' label='Lorem ipsum' onChange={onChange} value={false} />
        <Checkbox size='large' label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Checkbox size='large' label='Lorem ipsum' onChange={onChange} />
    </>
  );
});

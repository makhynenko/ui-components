import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';
import { ElementSize } from '../../types';

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
        <Checkbox size={ElementSize.Small} disabled value={true} label='Lorem ipsum 1111' />
        <Checkbox size={ElementSize.Small} disabled value={false} />
        <Checkbox size={ElementSize.Small} disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox
          size={ElementSize.Small}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={true}
        />
        <Checkbox
          size={ElementSize.Small}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={false}
        />
        <Checkbox
          size={ElementSize.Small}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={value}
        />
      </div>
      <br />
      <Checkbox size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Checkbox size={ElementSize.Small} />
        <Checkbox size={ElementSize.Small} value={false} />
        <Checkbox size={ElementSize.Small} value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} value={true} />
        <Checkbox size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} value={false} />
        <Checkbox size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Checkbox size={ElementSize.Small} label='Lorem ipsum' onChange={onChange} />

      <p>Medium</p>
      <div style={inlineStyles}>
        <Checkbox size={ElementSize.Medium} disabled />
        <Checkbox size={ElementSize.Medium} disabled value={false} />
        <Checkbox size={ElementSize.Medium} disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox
          size={ElementSize.Medium}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={true}
        />
        <Checkbox
          size={ElementSize.Medium}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={false}
        />
        <Checkbox
          size={ElementSize.Medium}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={value}
        />
      </div>
      <br />
      <Checkbox size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Checkbox size={ElementSize.Medium} />
        <Checkbox size={ElementSize.Medium} value={false} />
        <Checkbox size={ElementSize.Medium} value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} value={true} />
        <Checkbox size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} value={false} />
        <Checkbox size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Checkbox size={ElementSize.Medium} label='Lorem ipsum' onChange={onChange} />

      <p>Large</p>
      <div style={inlineStyles}>
        <Checkbox size={ElementSize.Large} disabled />
        <Checkbox size={ElementSize.Large} disabled value={false} />
        <Checkbox size={ElementSize.Large} disabled value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox
          size={ElementSize.Large}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={true}
        />
        <Checkbox
          size={ElementSize.Large}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={false}
        />
        <Checkbox
          size={ElementSize.Large}
          label='Lorem ipsum'
          onChange={onChange}
          disabled
          value={value}
        />
      </div>
      <br />
      <Checkbox size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} disabled />

      <br />
      <div style={inlineStyles}>
        <Checkbox size={ElementSize.Large} />
        <Checkbox size={ElementSize.Large} value={false} />
        <Checkbox size={ElementSize.Large} value={true} />
      </div>
      <br />
      <div style={inlineStyles}>
        <Checkbox size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} value={true} />
        <Checkbox size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} value={false} />
        <Checkbox size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} value={value} />
      </div>
      <br />
      <Checkbox size={ElementSize.Large} label='Lorem ipsum' onChange={onChange} />
    </>
  );
});

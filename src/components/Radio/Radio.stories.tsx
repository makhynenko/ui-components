import React from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from './Radio'
import { useState } from 'react';

storiesOf('Radio', module)
  .add('Default', () => {
    const [value, setValue] = useState<boolean>(false);

    const onChange = (newValue: boolean) => {
      setValue(newValue)
    }

    return (
      <>
        <p>Default === Medium</p>
        <Radio onChange={onChange} value={value} />
        <Radio onChange={onChange} value={value} />
        <Radio onChange={onChange} value={value} />

        <br />

        <Radio value={false} />
        <Radio value={true} />
        <br />
        <Radio label="Lorem ipsum" onChange={onChange} value={true} />
        <Radio label="Lorem ipsum" onChange={onChange} value={false} />
        <Radio label="Lorem ipsum" onChange={onChange} value={value} />
        <br />
        <Radio label="Lorem ipsum" onChange={onChange} />

        <p>Small</p>
        <Radio size="small" disabled />
        <Radio size="small" disabled value={false} />
        <Radio size="small" disabled value={true} />
        <br />
        <Radio size="small" label="Lorem ipsum" onChange={onChange} disabled value={true} />
        <Radio size="small" label="Lorem ipsum" onChange={onChange} disabled value={false} />
        <Radio size="small" label="Lorem ipsum" onChange={onChange} disabled value={value} />
        <br />
        <Radio size="small" label="Lorem ipsum" onChange={onChange} disabled />

        <br />
        <Radio size="small" />
        <Radio size="small" value={false} />
        <Radio size="small" value={true} />
        <br />
        <Radio size="small" label="Lorem ipsum" onChange={onChange} value={true} />
        <Radio size="small" label="Lorem ipsum" onChange={onChange} value={false} />
        <Radio size="small" label="Lorem ipsum" onChange={onChange} value={value} />
        <br />
        <Radio size="small" label="Lorem ipsum" onChange={onChange} />

        <p>Medium</p>
        <Radio size="medium" disabled />
        <Radio size="medium" disabled value={false} />
        <Radio size="medium" disabled value={true} />
        <br />
        <Radio size="medium" label="Lorem ipsum" onChange={onChange} disabled value={true} />
        <Radio size="medium" label="Lorem ipsum" onChange={onChange} disabled value={false} />
        <Radio size="medium" label="Lorem ipsum" onChange={onChange} disabled value={value} />
        <br />
        <Radio size="medium" label="Lorem ipsum" onChange={onChange} disabled />

        <br />
        <Radio size="medium" />
        <Radio size="medium" value={false} />
        <Radio size="medium" value={true} />
        <br />
        <Radio size="medium" label="Lorem ipsum" onChange={onChange} value={true} />
        <Radio size="medium" label="Lorem ipsum" onChange={onChange} value={false} />
        <Radio size="medium" label="Lorem ipsum" onChange={onChange} value={value} />
        <br />
        <Radio size="medium" label="Lorem ipsum" onChange={onChange} />


        <p>Large</p>
        <Radio size="large" disabled />
        <Radio size="large" disabled value={false} />
        <Radio size="large" disabled value={true} />
        <br />
        <Radio size="large" label="Lorem ipsum" onChange={onChange} disabled value={true} />
        <Radio size="large" label="Lorem ipsum" onChange={onChange} disabled value={false} />
        <Radio size="large" label="Lorem ipsum" onChange={onChange} disabled value={value} />
        <br />
        <Radio size="large" label="Lorem ipsum" onChange={onChange} disabled />

        <br />
        <Radio size="large" />
        <Radio size="large" value={false} />
        <Radio size="large" value={true} />
        <br />
        <Radio size="large" label="Lorem ipsum" onChange={onChange} value={true} />
        <Radio size="large" label="Lorem ipsum" onChange={onChange} value={false} />
        <Radio size="large" label="Lorem ipsum" onChange={onChange} value={value} />
        <br />
        <Radio size="large" label="Lorem ipsum" onChange={onChange} />

      </>
    )
  })
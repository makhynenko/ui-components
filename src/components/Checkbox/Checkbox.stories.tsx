import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './Checkbox'
import { useState } from 'react';

storiesOf('Input', module)
  .add('Default', () => {
    const [value, setValue] = useState<boolean>(false);

    const onChange = (newValue: boolean) => {
      setValue(newValue)
    }

    return (
      <>
        <p>Default === Medium</p>
        <Checkbox />
        <Checkbox value={false} />
        <Checkbox value={true} />
        <br />
        <Checkbox label="Lorem ipsum" onChange={onChange} value={true} />
        <Checkbox label="Lorem ipsum" onChange={onChange} value={false} />
        <Checkbox label="Lorem ipsum" onChange={onChange} value={value} />
        <br />
        <Checkbox label="Lorem ipsum" onChange={onChange} />

        <p>Small</p>
        <Checkbox size="small" disabled />
        <Checkbox size="small" disabled value={false} />
        <Checkbox size="small" disabled value={true} />
        <br />
        <Checkbox size="small" label="Lorem ipsum" onChange={onChange} disabled value={true} />
        <Checkbox size="small" label="Lorem ipsum" onChange={onChange} disabled value={false} />
        <Checkbox size="small" label="Lorem ipsum" onChange={onChange} disabled value={value} />
        <br />
        <Checkbox size="small" label="Lorem ipsum" onChange={onChange} disabled />

        <br />
        <Checkbox size="small" />
        <Checkbox size="small" value={false} />
        <Checkbox size="small" value={true} />
        <br />
        <Checkbox size="small" label="Lorem ipsum" onChange={onChange} value={true} />
        <Checkbox size="small" label="Lorem ipsum" onChange={onChange} value={false} />
        <Checkbox size="small" label="Lorem ipsum" onChange={onChange} value={value} />
        <br />
        <Checkbox size="small" label="Lorem ipsum" onChange={onChange} />

        <p>Medium</p>
        <Checkbox size="medium" disabled />
        <Checkbox size="medium" disabled value={false} />
        <Checkbox size="medium" disabled value={true} />
        <br />
        <Checkbox size="medium" label="Lorem ipsum" onChange={onChange} disabled value={true} />
        <Checkbox size="medium" label="Lorem ipsum" onChange={onChange} disabled value={false} />
        <Checkbox size="medium" label="Lorem ipsum" onChange={onChange} disabled value={value} />
        <br />
        <Checkbox size="medium" label="Lorem ipsum" onChange={onChange} disabled />

        <br />
        <Checkbox size="medium" />
        <Checkbox size="medium" value={false} />
        <Checkbox size="medium" value={true} />
        <br />
        <Checkbox size="medium" label="Lorem ipsum" onChange={onChange} value={true} />
        <Checkbox size="medium" label="Lorem ipsum" onChange={onChange} value={false} />
        <Checkbox size="medium" label="Lorem ipsum" onChange={onChange} value={value} />
        <br />
        <Checkbox size="medium" label="Lorem ipsum" onChange={onChange} />


        <p>Large</p>
        <Checkbox size="large" disabled />
        <Checkbox size="large" disabled value={false} />
        <Checkbox size="large" disabled value={true} />
        <br />
        <Checkbox size="large" label="Lorem ipsum" onChange={onChange} disabled value={true} />
        <Checkbox size="large" label="Lorem ipsum" onChange={onChange} disabled value={false} />
        <Checkbox size="large" label="Lorem ipsum" onChange={onChange} disabled value={value} />
        <br />
        <Checkbox size="large" label="Lorem ipsum" onChange={onChange} disabled />

        <br />
        <Checkbox size="large" />
        <Checkbox size="large" value={false} />
        <Checkbox size="large" value={true} />
        <br />
        <Checkbox size="large" label="Lorem ipsum" onChange={onChange} value={true} />
        <Checkbox size="large" label="Lorem ipsum" onChange={onChange} value={false} />
        <Checkbox size="large" label="Lorem ipsum" onChange={onChange} value={value} />
        <br />
        <Checkbox size="large" label="Lorem ipsum" onChange={onChange} />

      </>
    )
  })
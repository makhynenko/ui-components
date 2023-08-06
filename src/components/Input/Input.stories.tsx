import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

storiesOf('Input', module)
  .add('Default', () => (
    <>
      <p>small</p>
      <Input placeholder={'text'} size="small" />
      <Input placeholder={'text'} size="small" invalid />
      <Input placeholder={'text'} size="small" disabled />

      <p>medium</p>
      <Input placeholder={'text'} size="medium" />
      <Input placeholder={'text'} size="medium" invalid />
      <Input placeholder={'text'} size="medium" disabled />

      <p>large</p>
      <Input placeholder={'text'} size="large" />
      <Input placeholder={'text'} size="large" invalid />
      <Input placeholder={'text'} size="large" disabled />
    </>
  ))

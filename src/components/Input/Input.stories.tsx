import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

storiesOf('Input', module)
  .add('Default', () => (
    <>
      <p>small</p>
      <Input placeholder={'text'} componentSize="small" />
      <Input placeholder={'text'} componentSize="small" invalid />
      <Input placeholder={'text'} componentSize="small" disabled />

      <p>medium</p>
      <Input placeholder={'text'} componentSize="medium" />
      <Input placeholder={'text'} componentSize="medium" invalid />
      <Input placeholder={'text'} componentSize="medium" disabled />

      <p>large</p>
      <Input placeholder={'text'} componentSize="large" />
      <Input placeholder={'text'} componentSize="large" invalid />
      <Input placeholder={'text'} componentSize="large" disabled />
    </>
  ))

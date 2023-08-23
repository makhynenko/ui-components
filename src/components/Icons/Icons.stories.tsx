import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icons } from './Icons';


storiesOf('Icons', module)
  .add('Default', () => (
    <Icons name={'cross'} color={'red'} />
  ))

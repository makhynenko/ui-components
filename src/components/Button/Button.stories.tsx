import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { ElementSize } from '../../types';
import { Icons } from '../Icons';

storiesOf('Button', module).add('Default', () => (
  <>
    <p>no att</p>
    <Button>Button default</Button>

    <div className='regular'>
      <p>variant only</p>
      <Button variant='primary'>Button pr</Button>
      <Button variant='secondary'>Button sec</Button>

      <p>size only</p>
      <Button size={ElementSize.Small}>Button sm</Button>
      <Button size={ElementSize.Medium}>Button md</Button>
      <Button size={ElementSize.Large}>Button lg</Button>

      <p>size and variant</p>
      <p>primary</p>
      <Button size={ElementSize.Small} variant='primary'>
        Button sm pr
      </Button>
      <Button size={ElementSize.Medium} variant='primary'>
        Button md pr
      </Button>
      <Button size={ElementSize.Large} variant='primary'>
        Button lg pr
      </Button>

      <p>secondary</p>
      <Button size={ElementSize.Small} variant='secondary'>
        Button sm sec
      </Button>
      <Button size={ElementSize.Medium} variant='secondary'>
        Button md sec
      </Button>
      <Button size={ElementSize.Large} variant='secondary'>
        Button lg sec
      </Button>

      <p>ghost</p>
      <Button size={ElementSize.Small} variant='ghost'>
        Button sm ghost
      </Button>
      <Button size={ElementSize.Medium} variant='ghost'>
        Button md ghost
      </Button>
      <Button size={ElementSize.Large} variant='ghost'>
        Button lg ghost
      </Button>
    </div>

    <div className='disabled'>
      <p>only dis</p>
      <Button disabled>Button dis</Button>

      <p>disabled with variant only</p>
      <Button disabled variant='primary'>
        Button pr
      </Button>
      <Button disabled variant='secondary'>
        Button sec
      </Button>

      <p>disabled with size only</p>
      <Button disabled size={ElementSize.Small}>
        Button sm
      </Button>
      <Button disabled size={ElementSize.Medium}>
        Button md
      </Button>
      <Button disabled size={ElementSize.Large}>
        Button lg
      </Button>

      <p>disabled with size and variant</p>
      <p>primary</p>
      <Button disabled size={ElementSize.Small} variant='primary'>
        Button sm pr
      </Button>
      <Button disabled size={ElementSize.Medium} variant='primary'>
        Button md pr
      </Button>
      <Button disabled size={ElementSize.Large} variant='primary'>
        Button lg pr
      </Button>

      <p>secondary</p>
      <Button disabled size={ElementSize.Small} variant='secondary'>
        Button sm sec
      </Button>
      <Button disabled size={ElementSize.Medium} variant='secondary'>
        Button md sec
      </Button>
      <Button disabled size={ElementSize.Large} variant='secondary'>
        Button lg sec
      </Button>

      <p>secondary</p>
      <Button disabled size={ElementSize.Small} variant='ghost'>
        Button sm sec
      </Button>
      <Button disabled size={ElementSize.Medium} variant='ghost'>
        Button md sec
      </Button>
      <Button disabled size={ElementSize.Large} variant='ghost'>
        Button lg sec
      </Button>

      <p>with Icon</p>
      <Button variant='primary'>
        <Icons name='burger' />
        Button pr
      </Button>
      <Button variant='secondary'>
        <Icons name='download' />
        Button sec
      </Button>

      <p>size and variant</p>
      <p>primary</p>
      <Button size={ElementSize.Small} variant='primary'>
        Button sm pr
        <Icons name='archive' />
      </Button>
      <Button size={ElementSize.Medium} variant='primary'>
        Button md pr
        <Icons name='archive' />
      </Button>
      <Button size={ElementSize.Large} variant='primary'>
        Button lg pr
        <Icons name='archive' />
      </Button>

      <p>secondary</p>
      <Button size={ElementSize.Small} variant='secondary'>
        <Icons name='settings' />
        Button sm sec
      </Button>
      <Button size={ElementSize.Medium} variant='secondary'>
        <Icons name='settings' />
        Button md sec
      </Button>
      <Button size={ElementSize.Large} variant='secondary'>
        <Icons name='settings' />
        Button lg sec
      </Button>

      <p>ghost</p>
      <Button size={ElementSize.Small} variant='ghost'>
      <Icons name='plus' />
        Button sm ghost
      </Button>
      <Button size={ElementSize.Medium} variant='ghost'>
      <Icons name='plus' />
        Button md ghost
      </Button>
      <Button size={ElementSize.Large} variant='ghost'>
      <Icons name='plus' />
        Button lg ghost
      </Button>
    </div>
  </>
));

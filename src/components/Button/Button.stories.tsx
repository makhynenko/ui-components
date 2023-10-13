import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { ElementSize } from '../../types';

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

      <p>size and varinat</p>
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
    </div>
  </>
));

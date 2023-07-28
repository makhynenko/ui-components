import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('Default', () => (
    <>
      <p>no att</p>
      <Button>Button default</Button>

      <div className='regular'>
        <p>variant only</p>
        <Button variant='primary'>Button pr</Button>
        <Button variant='secondary'>Button sec</Button>

        <p>size only</p>
        <Button size='small'>Button sm</Button>
        <Button size='medium'>Button md</Button>
        <Button size='large'>Button lg</Button>


        <p>size and varinat</p>
        <p>primary</p>
        <Button size='small' variant='primary'>Button sm pr</Button>
        <Button size='medium' variant='primary'>Button md pr</Button>
        <Button size='large' variant='primary'>Button lg pr</Button>

        <p>secondary</p>
        <Button size='small' variant='secondary'>Button sm sec</Button>
        <Button size='medium' variant='secondary'>Button md sec</Button>
        <Button size='large' variant='secondary'>Button lg sec</Button>
      </div>

      <div className='disabled'>
        <p>only dis</p>
        <Button disabled>Button dis</Button>

        <p>disabled with variant only</p>
        <Button disabled variant='primary'>Button pr</Button>
        <Button disabled variant='secondary'>Button sec</Button>

        <p>disabled with size only</p>
        <Button disabled size='small'>Button sm</Button>
        <Button disabled size='medium'>Button md</Button>
        <Button disabled size='large'>Button lg</Button>

        <p>disabled with size and variant</p>
        <p>primary</p>
        <Button disabled size='small' variant='primary'>Button sm pr</Button>
        <Button disabled size='medium' variant='primary'>Button md pr</Button>
        <Button disabled size='large' variant='primary'>Button lg pr</Button>

        <p>secondary</p>
        <Button disabled size='small' variant='secondary'>Button sm sec</Button>
        <Button disabled size='medium' variant='secondary'>Button md sec</Button>
        <Button disabled size='large' variant='secondary'>Button lg sec</Button>
      </div>
    </>
  ));

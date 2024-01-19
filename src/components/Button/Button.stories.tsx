import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { ElementSize } from '../../types';
import { Icons } from '../Icons';
import { Input } from '../Input';

storiesOf('Button', module).add('Default', () => {
  const [width, setWidth] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e) => {
    setWidth(e.target.value);
  };

  const wrapperStyles: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const handleButtonClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <p>no att, default width=`fit-content`</p>
      <Button>Button default</Button>

      <p>You can control width of button (px or %)</p>
      <Input placeholder='Pls enter button width' onChange={handleInputChange} width='250px' />

      <div className='regular'>
        <p>variant only</p>
        <div style={wrapperStyles}>
          <Button variant='primary' width={width}>
            Button pr
          </Button>
          <Button variant='secondary' width={width}>
            Button sec
          </Button>
        </div>

        <p>size only</p>
        <div style={wrapperStyles}>
          <Button size={ElementSize.Small} width={width}>
            Button sm
          </Button>
          <Button size={ElementSize.Medium} width={width}>
            Button md
          </Button>
          <Button size={ElementSize.Large} width={width}>
            Button lg
          </Button>
        </div>

        <p>size, variant, loading - works on button click</p>
        <p>primary</p>
        <div style={wrapperStyles}>
          <Button
            size={ElementSize.Small}
            variant='primary'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button sm pr
          </Button>
          <Button
            size={ElementSize.Medium}
            variant='primary'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button md pr
          </Button>
          <Button
            size={ElementSize.Large}
            variant='primary'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button lg pr
          </Button>
        </div>

        <p>secondary</p>
        <div style={wrapperStyles}>
          <Button
            size={ElementSize.Small}
            variant='secondary'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button sm sec
          </Button>
          <Button
            size={ElementSize.Medium}
            variant='secondary'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button md sec
          </Button>
          <Button
            size={ElementSize.Large}
            variant='secondary'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button lg sec
          </Button>
        </div>
        <p>ghost</p>
        <div style={wrapperStyles}>
          <Button
            size={ElementSize.Small}
            variant='ghost'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button sm ghost
          </Button>
          <Button
            size={ElementSize.Medium}
            variant='ghost'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button md ghost
          </Button>
          <Button
            size={ElementSize.Large}
            variant='ghost'
            width={width}
            isLoading={isLoading}
            loadingText='Adding'
            onClick={handleButtonClick}
          >
            Button lg ghost
          </Button>
        </div>
      </div>

      <div className='disabled'>
        <p>only dis</p>
        <div style={wrapperStyles}>
          <Button disabled width={width}>
            Button dis
          </Button>
        </div>

        <p>disabled with variant only</p>
        <div style={wrapperStyles}>
          <Button disabled variant='primary' width={width}>
            Button pr
          </Button>
          <Button disabled variant='secondary' width={width}>
            Button sec
          </Button>
        </div>

        <p>disabled with size only</p>
        <div style={wrapperStyles}>
          <Button disabled size={ElementSize.Small} width={width}>
            Button sm
          </Button>
          <Button disabled size={ElementSize.Medium} width={width}>
            Button md
          </Button>
          <Button disabled size={ElementSize.Large} width={width}>
            Button lg
          </Button>
        </div>

        <p>disabled with size and variant</p>
        <p>primary</p>
        <div style={wrapperStyles}>
          <Button disabled size={ElementSize.Small} variant='primary' width={width}>
            Button sm pr
          </Button>
          <Button disabled size={ElementSize.Medium} variant='primary' width={width}>
            Button md pr
          </Button>
          <Button disabled size={ElementSize.Large} variant='primary' width={width}>
            Button lg pr
          </Button>
        </div>

        <p>secondary</p>
        <div style={wrapperStyles}>
          <Button disabled size={ElementSize.Small} variant='secondary' width={width}>
            Button sm sec
          </Button>
          <Button disabled size={ElementSize.Medium} variant='secondary' width={width}>
            Button md sec
          </Button>
          <Button disabled size={ElementSize.Large} variant='secondary' width={width}>
            Button lg sec
          </Button>
        </div>

        <p>secondary</p>
        <div style={wrapperStyles}>
          <Button disabled size={ElementSize.Small} variant='ghost' width={width}>
            Button sm sec
          </Button>
          <Button disabled size={ElementSize.Medium} variant='ghost' width={width}>
            Button md sec
          </Button>
          <Button disabled size={ElementSize.Large} variant='ghost' width={width}>
            Button lg sec
          </Button>
        </div>
      </div>

      <div className='withIcons'>
        <p>with Icon</p>
        <div style={wrapperStyles}>
          <Button variant='primary' width={width}>
            <Icons name='burger' />
            Button pr
          </Button>
          <Button variant='secondary' width={width}>
            <Icons name='download' />
            Button sec
          </Button>
        </div>

        <p>size and variant</p>
        <p>primary</p>
        <div style={wrapperStyles}>
          <Button size={ElementSize.Small} variant='primary' width={width}>
            Button sm pr
            <Icons name='archive' />
          </Button>
          <Button size={ElementSize.Medium} variant='primary' width={width}>
            Button md pr
            <Icons name='archive' />
          </Button>
          <Button size={ElementSize.Large} variant='primary' width={width}>
            Button lg pr
            <Icons name='archive' />
          </Button>
        </div>

        <p>secondary</p>
        <div style={wrapperStyles}>
          <Button size={ElementSize.Small} variant='secondary' width={width}>
            <Icons name='settings' />
            Button sm sec
          </Button>
          <Button size={ElementSize.Medium} variant='secondary' width={width}>
            <Icons name='settings' />
            Button md sec
          </Button>
          <Button size={ElementSize.Large} variant='secondary' width={width}>
            <Icons name='settings' />
            Button lg sec
          </Button>
        </div>

        <p>ghost</p>
        <div style={wrapperStyles}>
          <Button size={ElementSize.Small} variant='ghost' width={width}>
            <Icons name='plus' />
            Button sm ghost
          </Button>
          <Button size={ElementSize.Medium} variant='ghost' width={width}>
            <Icons name='plus' />
            Button md ghost
          </Button>
          <Button size={ElementSize.Large} variant='ghost' width={width}>
            <Icons name='plus' />
            Button lg ghost
          </Button>
        </div>
      </div>
    </>
  );
});

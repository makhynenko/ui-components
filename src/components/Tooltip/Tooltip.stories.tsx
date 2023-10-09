import React, { useState } from 'react';
import { Tooltip } from './Tooltip';
import { storiesOf } from '@storybook/react';
import { RadioGroup } from '../RadioGroup';
import { PopoverAlign, PopoverPosition } from '../../types';
import { Input } from '../Input';

storiesOf('Tooltip', module).add('Default', () => {
  const [newSelectedPosition, setNewSelectedPosition] = useState<PopoverPosition>(
    PopoverPosition.Top
  );
  const [newSelectedAlign, setNewSelectedAlign] = useState<PopoverAlign>(PopoverAlign.Center);
  const [ownWidth, setOwnWidth] = useState('300px');

  const customStyle: React.CSSProperties = {
    backgroundColor: '#3E7BFA',
    borderRadius: '4px',
    padding: '8px 4px',
    color: '#FFF',
    width: '132px',
    textAlign: 'center',
    lineHeight: '24px',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '8px',
    alignItems: 'center',
    height: '450px',
  };

  const PositionOptions = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' },
    { label: 'right', value: 'right' },
    { label: 'left', value: 'left' },
  ];

  const AlignOptions = [
    { label: 'start', value: 'start' },
    { label: 'center', value: 'center' },
    { label: 'end', value: 'end' },
  ];

  const onPositionSelect = (newSelectedPosition) => {
    setNewSelectedPosition(newSelectedPosition);
  };

  const onPositionAlign = (newSelectedAlign) => {
    setNewSelectedAlign(newSelectedAlign);
  };

  const handleWidthChange = (e) => {
    setOwnWidth(e.target.value);
  };

  const randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi nisl, mollis sit amet
  iaculis non...`;

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>Choose needed position for further tooltip </p>
      <RadioGroup
        options={PositionOptions}
        selectedValue={newSelectedPosition}
        onSelect={onPositionSelect}
        size='large'
      />

      <p style={{ fontWeight: 'bold' }}>Choose needed align for further tooltip </p>
      <RadioGroup
        options={AlignOptions}
        selectedValue={newSelectedAlign}
        onSelect={onPositionAlign}
        size='large'
      />

      <p style={{ fontWeight: 'bold' }}>
        Choose needed width for further tooltip - use number with `px`
      </p>
      <Input placeholder={'Max-width: 400px'} size='medium' onChange={handleWidthChange} />

      <div style={wrapperStyle}>
        <Tooltip
          position={newSelectedPosition}
          align={newSelectedAlign}
          text={randomText}
          width={ownWidth}
        >
          <div style={customStyle}>width: {ownWidth}</div>
        </Tooltip>
      </div>
    </div>
  );
});

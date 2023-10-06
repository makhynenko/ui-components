import React, { useState } from 'react';
import { Tooltip } from './Tooltip';
import { storiesOf } from '@storybook/react';
import { RadioGroup } from '../RadioGroup';
import { PopoverAlignType, PopoverPositionType, PopoverWidthType } from '../../types';

storiesOf('Tooltip', module).add('Default', () => {
  const [newSelectedPosition, setNewSelectedPosition] = useState<PopoverPositionType>('top');
  const [newSelectedAlign, setNewSelectedAlign] = useState<PopoverAlignType>('center');
  const [newSelectedWidth, setNewSelectedWidth] = useState<PopoverWidthType>('300px');

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

  const WidthOptions = [
    { label: '100px', value: '100px' },
    { label: '150px', value: '150px' },
    { label: '300px', value: '300px' },
  ];

  const onPositionSelect = (newSelectedPosition) => {
    setNewSelectedPosition(newSelectedPosition);
  };

  const onPositionAlign = (newSelectedAlign) => {
    setNewSelectedAlign(newSelectedAlign);
  };

  const onPositionWidth = (newSelectedWidth) => {
    setNewSelectedWidth(newSelectedWidth);
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

      <p style={{ fontWeight: 'bold' }}>Choose needed width for further tooltip </p>
      <RadioGroup
        options={WidthOptions}
        selectedValue={newSelectedWidth}
        onSelect={onPositionWidth}
        size='large'
      />

      <div style={wrapperStyle}>
        <Tooltip
          position={newSelectedPosition}
          align={newSelectedAlign}
          text={randomText}
          width={newSelectedWidth}
        >
          <div style={customStyle}>Hover me</div>
        </Tooltip>
      </div>
    </div>
  );
});

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { PopoverAlign, PopoverPosition, PopoverTrigger } from '../../types';
import { Icons } from '../Icons';
import { Popover } from './Popover';
import { Button } from '../Button';
import { Input } from '../Input';
import { CheckboxGroup } from '../CheckboxGroup';
import { RadioGroup } from '../RadioGroup';
import { ElementSize } from '../../types';

storiesOf('Popover', module).add('Default', () => {
  const optionsExample = [
    { label: 'string', value: 'str', disabled: false },
    { label: 'number', value: '123', disabled: false },
    { label: 'boolean', value: 'boo', disabled: false },
  ];

  const triggerOptions = [
    { label: 'hover', value: 'hover' },
    { label: 'click', value: 'click' },
  ];

  const [newSelectedTrigger, setNewSelectedTrigger] = useState<PopoverTrigger>(
    PopoverTrigger.Hover
  );
  const [selectedValues, setSelectedValues] = useState([]);
  const [newColor, setNewColor] = useState('#000');
  const [newWidth, setNewWidth] = useState('400px');

  const onSelect = (selectedValues) => {
    setSelectedValues(selectedValues);
  };

  const handleColorChange = (e) => {
    setNewColor(e.target.value);
  };

  const handleWidthChange = (e) => {
    setNewWidth(e.target.value);
  };

  const onTriggerSelect = (newSelectedTrigger) => {
    setNewSelectedTrigger(newSelectedTrigger);
  };

  const customDivStyle: React.CSSProperties = {
    backgroundColor: '#3e7bfa',
    borderRadius: '4px',
    padding: '8px 4px',
    color: '#fff',
    height: '48px',
    width: '132px',
    textAlign: 'center',
    lineHeight: '24px',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '8px',
    alignItems: 'center',
  };
  const wrapperStyleLessBlocks = {
    display: 'flex',
    columnGap: '24px',
    alignItems: 'center',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
      }}
    >
      <p>Basic</p>
      <Popover content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}>
        <Button>Hover Me</Button>
      </Popover>

      <p>Ways to trigger with custom HTML</p>
      <div style={wrapperStyleLessBlocks}>
        <Popover
          trigger={PopoverTrigger.Hover}
          content={
            <>
              <p>Arrow icons list</p>
              <ul>
                <li>
                  arrowDownCircle <Icons name='arrowDownCircle' color='white' />
                </li>
                <li>
                  arrowRightCircle
                  <Icons name='arrowRightCircle' color='white' />
                </li>
                <li>
                  arrowUpCircle
                  <Icons name='arrowUpCircle' color='white' />
                </li>
                <li>
                  arrowLeftCircle
                  <Icons name='arrowLeftCircle' color='white' />
                </li>
              </ul>
            </>
          }
        >
          <Button>Hover Me</Button>
        </Popover>

        <Popover
          trigger={PopoverTrigger.Click}
          content={
            <>
              <p>Checkbox group</p>
              <CheckboxGroup
                options={optionsExample}
                selectedValues={selectedValues}
                onSelect={onSelect}
                size={ElementSize.Large}
              />
            </>
          }
        >
          <Button>Click Me</Button>
        </Popover>
      </div>

      <p style={{ fontWeight: 'bold' }}>Choose needed trigger for further popovers </p>
      <RadioGroup
        options={triggerOptions}
        selectedValue={newSelectedTrigger}
        onSelect={onTriggerSelect}
        size={ElementSize.Large}
      />

      <p>Position and default aligning (center)</p>
      <div style={wrapperStyle}>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Right}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`right` <br />
            align=`center`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Top}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`top`
            <br /> align=`center`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`bottom`
            <br />
            align=`center`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Left}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`left` <br />
            align=`center`
          </div>
        </Popover>
      </div>

      <p>Position and align=start</p>
      <div style={wrapperStyle}>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Right}
          align={PopoverAlign.Start}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            `placement=right` <br />
            align=`start`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Top}
          align={PopoverAlign.Start}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`top` <br /> align=`start`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          align={PopoverAlign.Start}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`bottom` <br /> align=`start`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Left}
          align={PopoverAlign.Start}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`left` <br /> align=`start`
          </div>
        </Popover>
      </div>

      <p>Position and align=end</p>
      <div style={wrapperStyle}>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Right}
          align={PopoverAlign.End}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`right` <br /> align=`end`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Top}
          align={PopoverAlign.End}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`top`
            <br /> align=`end`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          align={PopoverAlign.End}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`bottom`
            <br /> align=`end`
          </div>
        </Popover>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Left}
          align={PopoverAlign.End}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <div style={customDivStyle}>
            placement=`left`
            <br /> align=`end`
          </div>
        </Popover>
      </div>

      <p>Offsets with arrow</p>
      <div style={wrapperStyle}>
        <Popover
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>Offset=0</Button>
        </Popover>

        <Popover
          offset={8}
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>Offset=8</Button>
        </Popover>

        <Popover
          offset={16}
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>Offset=16</Button>
        </Popover>

        <Popover
          offset={24}
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>Offset=24</Button>
        </Popover>
      </div>

      <p>Offsets without arrow</p>
      <div style={wrapperStyle}>
        <Popover
          hasArrow={false}
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>Offset=0</Button>
        </Popover>

        <Popover
          offset={8}
          hasArrow={false}
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>Offset=8</Button>
        </Popover>

        <Popover
          offset={16}
          hasArrow={false}
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>Offset=16</Button>
        </Popover>

        <Popover
          offset={24}
          hasArrow={false}
          trigger={newSelectedTrigger}
          position={PopoverPosition.Bottom}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>Offset=24</Button>
        </Popover>
      </div>

      <p>Colors</p>
      <div style={wrapperStyle}>
        <Popover
          trigger={newSelectedTrigger}
          backgroundColor='red'
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>red</Button>
        </Popover>

        <Popover
          trigger={newSelectedTrigger}
          backgroundColor='orange'
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>orange</Button>
        </Popover>

        <Popover
          trigger={newSelectedTrigger}
          backgroundColor='#60830d'
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>#60830d</Button>
        </Popover>

        <Popover
          trigger={newSelectedTrigger}
          backgroundColor='#e933ff'
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>#e933ff</Button>
        </Popover>
      </div>

      <div style={wrapperStyleLessBlocks}>
        <p>Try your color - Use default colors OR Hex color codes starts with # </p>
        <Input
          placeholder={'Please insert color'}
          size={ElementSize.Medium}
          onChange={handleColorChange}
        />
        <Popover
          trigger={newSelectedTrigger}
          backgroundColor={newColor}
          content={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>}
        >
          <Button>color: {newColor}</Button>
        </Popover>
      </div>

      <div style={wrapperStyleLessBlocks}>
        <p>Try your max width - use number with `px`</p>
        <Input
          placeholder={'Max-width: 400px'}
          size={ElementSize.Medium}
          onChange={handleWidthChange}
        />
        <Popover
          trigger={newSelectedTrigger}
          width={newWidth}
          content={
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi nisl, mollis sit amet
              iaculis non, dignissim nec sem. Etiam vulputate tristique tortor, id pharetra nisi
              tempor ut. In ac enim vel est dapibus placerat. Morbi convallis tincidunt ante sit
              amet blandit. Sed ut ante blandit ante interdum posuere. Nunc mattis est ut metus
              faucibus, a aliquet nibh feugiat. Donec eget pretium justo. Nulla mollis condimentum
              nisl sit amet eleifend. Phasellus velit est, ultrices vel nulla nec, varius
              scelerisque nisl. Quisque sed ex a leo aliquet molestie finibus at nibh. Phasellus
              volutpat, arcu sed maximus molestie, neque quam hendrerit mauris, vel dignissim diam
              purus non tortor. Mauris dictum turpis eget consequat hendrerit.
            </div>
          }
        >
          <Button>max-width: {newWidth}</Button>
        </Popover>
      </div>
    </div>
  );
});

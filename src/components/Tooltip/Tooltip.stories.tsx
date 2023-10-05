import React from 'react';
import { Tooltip } from './Tooltip';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';

storiesOf('Tooltip', module).add('Default', () => {
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
  };

  const randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi nisl, mollis sit amet
  iaculis non, dignissim nec sem. Etiam vulputate tristique tortor, id pharetra nisi
  tempor ut.`;

  return (
    <div>
      <p>Position and default aligning (center)</p>
      <div style={wrapperStyle}>
        <Tooltip position='right' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'>
          <div style={customStyle}>
            placement=`right` <br />
            align=`center`
          </div>
        </Tooltip>
        <Tooltip position='top' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'>
          <div style={customStyle}>
            placement=`top`
            <br /> align=`center`
          </div>
        </Tooltip>
        <Tooltip position='bottom' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'>
          <div style={customStyle}>
            placement=`bottom`
            <br />
            align=`center`
          </div>
        </Tooltip>
        <Tooltip position='left' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'>
          <div style={customStyle}>
            placement=`left` <br />
            align=`center`
          </div>
        </Tooltip>
      </div>

      <p>Position and align=start</p>
      <div style={wrapperStyle}>
        <Tooltip
          position='right'
          align='start'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        >
          <div style={customStyle}>
            `placement=right` <br />
            align=`start`
          </div>
        </Tooltip>
        <Tooltip
          position='top'
          align='start'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        >
          <div style={customStyle}>
            placement=`top` <br /> align=`start`
          </div>
        </Tooltip>
        <Tooltip
          position='bottom'
          align='start'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        >
          <div style={customStyle}>
            placement=`bottom` <br /> align=`start`
          </div>
        </Tooltip>
        <Tooltip
          position='left'
          align='start'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        >
          <div style={customStyle}>
            placement=`left` <br /> align=`start`
          </div>
        </Tooltip>
      </div>

      <p>Position and align=end</p>
      <div style={wrapperStyle}>
        <Tooltip
          position='right'
          align='end'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        >
          <div style={customStyle}>
            placement=`right` <br /> align=`end`
          </div>
        </Tooltip>
        <Tooltip
          position='top'
          align='end'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        >
          <div style={customStyle}>
            placement=`top`
            <br /> align=`end`
          </div>
        </Tooltip>
        <Tooltip
          position='bottom'
          align='end'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        >
          <div style={customStyle}>
            placement=`bottom`
            <br /> align=`end`
          </div>
        </Tooltip>
        <Tooltip
          position='left'
          align='end'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        >
          <div style={customStyle}>
            placement=`left`
            <br /> align=`end`
          </div>
        </Tooltip>
      </div>

      <p>Tooltip width</p>
      <div style={wrapperStyle}>
        <Tooltip position='top' text={randomText} width='100px'>
          <Button>width=100px</Button>
        </Tooltip>

        <Tooltip position='top' text={randomText} width='150px'>
          <Button>width=150px</Button>
        </Tooltip>

        <Tooltip position='top' text={randomText} width='300px'>
          <Button>width=300px</Button>
        </Tooltip>

        <Tooltip position='top' text={randomText} width='500px'>
          <Button>width=500px</Button>
        </Tooltip>
      </div>
    </div>
  );
});

import React from 'react';
import { Tooltip } from './Tooltip';
import { storiesOf } from '@storybook/react';

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

  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const randomText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mi nisl, mollis sit amet
  iaculis non, dignissim nec sem. Etiam vulputate tristique tortor, id pharetra nisi
  tempor ut. In ac enim vel est dapibus placerat. Morbi convallis tincidunt ante sit
  amet blandit. Sed ut ante blandit ante interdum posuere. Nunc mattis est ut metus
  faucibus, a aliquet nibh feugiat. Donec eget pretium justo.`;

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        gap: '32px',
      }}
    >
      <div style={wrapperStyle}>
        <p>First</p>
        <Tooltip text={'First position'} position='top'>
          <div style={customStyle}>placement=`top`</div>
        </Tooltip>
      </div>

      <div style={wrapperStyle}>
        <p>Second</p>
        <Tooltip text={randomText} position='bottom' width='300px'>
          <div style={customStyle}>placement=`bottom`</div>
        </Tooltip>
      </div>

      <div style={wrapperStyle}>
        <p>Third</p>
        <Tooltip text='Third position' position='right'>
          <div style={customStyle}>placement=`right`</div>
        </Tooltip>
      </div>

      <div style={wrapperStyle}>
        <p>Fourth</p>
        <Tooltip text='Fourth position' position='left'>
          <div style={customStyle}>placement=`left`</div>
        </Tooltip>
      </div>
    </div>
  );
});

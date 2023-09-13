import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from './Input';

storiesOf('Input', module)
  .add('Default', () => {
    const [currentValue, setCurrentValue] = useState<string>('')

    const onInputChange = (e) => {
      setCurrentValue(e.target.value)
    }

    const onClear = () => {
      setCurrentValue('')
    }

    return (
      <>
        <p>small</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Input placeholder={'text'} size="small" />
          <Input placeholder={'text'} size="small" invalid />
          <Input placeholder={'text'} size="small" disabled />
        </div>

        <p>medium</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Input placeholder={'text'} size="medium" />
          <Input placeholder={'text'} size="medium" invalid />
          <Input placeholder={'text'} size="medium" disabled />
        </div>

        <p>large</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Input placeholder={'text'} size="large" />
          <Input placeholder={'text'} size="large" invalid />
          <Input placeholder={'text'} size="large" disabled />
        </div>

        <p>WITH ICON</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Input placeholder={'text'} size="small" icon='burger' />
          <Input placeholder={'text'} size="medium" icon='alertCircle' invalid />
          <Input placeholder={'text'} size="large" icon='search' disabled />
        </div>

        <p>WITH REMOVE ICON</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Input placeholder={'text'} size="small" icon='burger' clearable onClear={onClear} onChange={onInputChange} value={currentValue} />
          <Input placeholder={'text'} size="medium" icon='clock' invalid clearable onClear={onClear} onChange={onInputChange} value={currentValue} />
          <Input placeholder={'text'} size="large" icon='search' clearable onClear={onClear} onChange={onInputChange} value={currentValue} />
        </div>

        <p>If input disabled CLEAR icon not shown</p>
        <Input placeholder={'text'} size="large" icon='search' clearable onClear={onClear} onChange={onInputChange} value={currentValue} disabled />
      </>
    )
  })

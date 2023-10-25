import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ITableColumn, Table } from './';

interface User {
  age: number
  name: string
  salary: number
}

const users = [
  {
    id: '345',
    age: 28,
    name: 'Alex',
    salary: 500,
  }
]
const columns: ITableColumn<User>[] = [
  {
    key: 'age',
    dataIndex: 'age',
    width: '150px'
  }
]

storiesOf('Table', module)
  .add('Default', () => {
    return (

        <div >
          <Table<User>
            columns={columns}
            dataList={users}
            rowKey="id"
          />
        </div>
    )
  })

import React from 'react';
import { ITableColumn } from './types';

export interface StarWarsPerson {
  birth_year: string;
  eye_color: string;
  gender: 'male' | 'female' | 'hermaphrodite' | 'n/a';
  hair_color: string;
  height: number;
  id: number;
  mass: number | undefined;
  name: string;
  skin_color: string;
}

const starWarsPeople: StarWarsPerson[] = [
  {
    id: 1,
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    id: 102,
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    id: 103,
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    id: 4,
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    id: 5,
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    id: 6,
    name: 'Owen Lars',
    height: 178,
    mass: 120,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    id: 7,
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
  {
    id: 8,
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    id: 9,
    name: 'Wilhuff Tarkin',
    height: 180,
    mass: undefined,
    hair_color: 'auburn, grey',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '64BBY',
    gender: 'male',
  },
  {
    id: 10,
    name: 'Chewbacca',
    height: 228,
    mass: 112,
    hair_color: 'brown',
    skin_color: 'unknown',
    eye_color: 'blue',
    birth_year: '200BBY',
    gender: 'male',
  },
  {
    id: 11,
    name: 'Han Solo',
    height: 180,
    mass: 80,
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year: '29BBY',
    gender: 'male',
  },
  {
    id: 12,
    name: 'Greedo',
    height: 173,
    mass: 74,
    hair_color: 'n/a',
    skin_color: 'green',
    eye_color: 'black',
    birth_year: '44BBY',
    gender: 'male',
  },
  {
    id: 13,
    name: 'Jabba Desilijic Tiure',
    height: 175,
    mass: 1358,
    hair_color: 'n/a',
    skin_color: 'green-tan, brown',
    eye_color: 'orange',
    birth_year: '600BBY',
    gender: 'hermaphrodite',
  },
  {
    id: 14,
    name: 'Wedge Antilles',
    height: 170,
    mass: 77,
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'hazel',
    birth_year: '21BBY',
    gender: 'male',
  },
  {
    id: 15,
    name: 'Yoda',
    height: 66,
    mass: 17,
    hair_color: 'white',
    skin_color: 'green',
    eye_color: 'brown',
    birth_year: '896BBY',
    gender: 'male',
  },
];

const starWarsColumns: ITableColumn<StarWarsPerson>[] = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID',
    width: '60px',
    cellStyle: (person) => {
      if (person.id === 1) {
        return {
          backgroundColor: 'silver',
        };
      }
      return {};
    },
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
    width: 200,
  },
  {
    key: 'height',
    title: 'Height',
    dataIndex: 'height',
    sortable: true,
    // autowidth is 100
  },
  {
    key: 'mass',
    title: 'Weight',
    dataIndex: 'mass',
  },
  {
    key: 'birth_year',
    title: 'Year of Birth',
    dataIndex: 'birth_year',
  },
  {
    key: 'colors',
    title: 'Character',
    renderCell: (v) => {
      return [`Eye: ${v.eye_color}`, `Hair: ${v.hair_color}`, `Skin: ${v.skin_color}`].join(' / ');
    },
  },
  {
    key: 'gender',
    title: 'Gender',
    renderCell: (v) => <small>{v.gender}</small>,
  },
];

export const MockedTableData = {
  columnsBasic: starWarsColumns,
  data: starWarsPeople,
};

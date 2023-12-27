import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ITableColumn, Table } from './';
import { Icons } from '../Icons';
import { RadioGroup } from '../RadioGroup';
import { Input } from '../Input';
import { Button } from '../Button';

//Table 1
interface User {
  age: number;
  name: string;
  salary: number;
  id: string;
  orderNumber: number;
  orderDate: string;
}

const users = [
  {
    id: '1',
    age: 11,
    name: 'Alla',
    salary: 200,
    orderNumber: 987654321001,
    orderDate: '22.11.2021',
  },
  {
    id: '2',
    age: 25,
    name: 'Bob',
    salary: 350,
    orderNumber: 123456789011,
    orderDate: '23.11.2021',
  },
  {
    id: '3',
    age: 18,
    name: 'Charlie',
    salary: 500,
    orderNumber: 456789012345,
    orderDate: '24.11.2021',
  },
  {
    id: '4',
    age: 30,
    name: 'David',
    salary: 800,
    orderNumber: 234567890123,
    orderDate: '25.11.2021',
  },
  {
    id: '5',
    age: 22,
    name: 'Eva',
    salary: 600,
    orderNumber: 567890123456,
    orderDate: '26.11.2021',
  },
  {
    id: '6',
    age: 14,
    name: 'Frank',
    salary: 250,
    orderNumber: 345678901234,
    orderDate: '27.11.2021',
  },
  {
    id: '7',
    age: 28,
    name: 'Grace',
    salary: 700,
    orderNumber: 789012345678,
    orderDate: '28.11.2021',
  },
  {
    id: '8',
    age: 20,
    name: 'Hank',
    salary: 450,
    orderNumber: 890123456789,
    orderDate: '29.11.2021',
  },
  {
    id: '9',
    age: 32,
    name: 'Ivy',
    salary: 900,
    orderNumber: 901234567890,
    orderDate: '30.11.2021',
  },
  {
    id: '10',
    age: 19,
    name: 'Jack',
    salary: 300,
    orderNumber: 234567890123,
    orderDate: '01.12.2021',
  },
  {
    id: '11',
    age: 26,
    name: 'Katie',
    salary: 550,
    orderNumber: 345678901234,
    orderDate: '02.12.2021',
  },
  {
    id: '12',
    age: 16,
    name: 'Leo',
    salary: 400,
    orderNumber: 456789012345,
    orderDate: '03.12.2021',
  },
  {
    id: '13',
    age: 29,
    name: 'Mia',
    salary: 750,
    orderNumber: 567890123456,
    orderDate: '04.12.2021',
  },
  {
    id: '14',
    age: 23,
    name: 'Nina',
    salary: 350,
    orderNumber: 678901234567,
    orderDate: '05.12.2021',
  },
  {
    id: '15',
    age: 17,
    name: 'Oscar',
    salary: 600,
    orderNumber: 789012345678,
    orderDate: '06.12.2021',
  },
  {
    id: '16',
    age: 31,
    name: 'Penny',
    salary: 850,
    orderNumber: 890123456789,
    orderDate: '07.12.2021',
  },
  {
    id: '17',
    age: 21,
    name: 'Quinn',
    salary: 500,
    orderNumber: 901234567890,
    orderDate: '08.12.2021',
  },
  {
    id: '18',
    age: 15,
    name: 'Riley',
    salary: 300,
    orderNumber: 123456789012,
    orderDate: '09.12.2021',
  },
  {
    id: '19',
    age: 27,
    name: 'Sam',
    salary: 700,
    orderNumber: 234567890123,
    orderDate: '10.12.2021',
  },
  {
    id: '20',
    age: 24,
    name: 'Tyler',
    salary: 450,
    orderNumber: 345678901234,
    orderDate: '11.12.2021',
  },
  {
    id: '21',
    age: 13,
    name: 'Uma',
    salary: 200,
    orderNumber: 456789012345,
    orderDate: '12.12.2021',
  },
  {
    id: '22',
    age: 33,
    name: 'Victor',
    salary: 950,
    orderNumber: 567890123456,
    orderDate: '13.12.2021',
  },
  {
    id: '23',
    age: 18,
    name: 'Wendy',
    salary: 400,
    orderNumber: 678901234567,
    orderDate: '14.12.2021',
  },
  {
    id: '24',
    age: 29,
    name: 'Xander',
    salary: 700,
    orderNumber: 789012345678,
    orderDate: '15.12.2021',
  },
  {
    id: '25',
    age: 22,
    name: 'Yara',
    salary: 550,
    orderNumber: 890123456789,
    orderDate: '16.12.2021',
  },
  {
    id: '26',
    age: 16,
    name: 'Zack',
    salary: 250,
    orderNumber: 901234567890,
    orderDate: '17.12.2021',
  },
  {
    id: '27',
    age: 31,
    name: 'Alice',
    salary: 800,
    orderNumber: 123456789012,
    orderDate: '18.12.2021',
  },
  {
    id: '28',
    age: 23,
    name: 'Ben',
    salary: 500,
    orderNumber: 234567890123,
    orderDate: '19.12.2021',
  },
  {
    id: '29',
    age: 19,
    name: 'Cathy',
    salary: 350,
    orderNumber: 345678901234,
    orderDate: '20.12.2021',
  },
  {
    id: '30',
    age: 27,
    name: 'Dylan',
    salary: 600,
    orderNumber: 456789012345,
    orderDate: '21.12.2021',
  },
];

const columns: ITableColumn<User>[] = [
  {
    key: 'id',
    dataIndex: 'id',
    width: '150px',
    title: 'ID',
  },
  {
    key: 'age',
    dataIndex: 'age',
    width: '150px',
    title: 'Age',
  },
  {
    key: 'name',
    dataIndex: 'name',
    width: '150px',
    title: 'Name',
  },
  {
    key: 'salary',
    dataIndex: 'salary',
    width: '150px',
    title: 'Salary',
  },
  {
    key: 'orderNumber',
    dataIndex: 'orderNumber',
    width: '150px',
    title: 'Order number',
  },
  {
    key: 'orderDate',
    dataIndex: 'orderDate',
    width: '150px',
    title: 'Order date',
  },
];

//Table 2
interface Product {
  id: number;
  productName: string;
  category: string;
  productSku: number;
  color: string;
  price: number;
  availability: string;
  availableQuantity: number;
  description: string;
  weight: number;
  dimensions: string;
}

const products: Product[] = [
  {
    id: 39482,
    productName: 'Broccoli',
    category: 'vegetable',
    productSku: 867530912345,
    color: 'green',
    price: 2.99,
    availability: 'yes',
    availableQuantity: 45,
    description: 'Fresh and nutritious broccoli',
    weight: 0.5,
    dimensions: '8 x 4',
  },
  {
    id: 81926,
    productName: 'Apple',
    category: 'fruit',
    productSku: 123456789012,
    color: 'red',
    price: 1.49,
    availability: 'yes',
    availableQuantity: 75,
    description: 'Sweet and crisp red apple',
    weight: 0.3,
    dimensions: '3 x 3',
  },
  {
    id: 67521,
    productName: 'Carrot',
    category: 'vegetable',
    productSku: 987654321098,
    color: 'orange',
    price: 1.19,
    availability: 'yes',
    availableQuantity: 60,
    description: 'Juicy and vibrant orange carrot',
    weight: 0.2,
    dimensions: '6 x 2',
  },
  {
    id: 15234,
    productName: 'Banana',
    category: 'fruit',
    productSku: 567890123456,
    color: 'yellow',
    price: 0.79,
    availability: 'yes',
    availableQuantity: 90,
    description: 'Ripe and delicious yellow banana',
    weight: 0.25,
    dimensions: '4 x 1.5',
  },
  {
    id: 80317,
    productName: 'Spinach',
    category: 'vegetable',
    productSku: 234567890123,
    color: 'green',
    price: 1.99,
    availability: 'yes',
    availableQuantity: 30,
    description: 'Tender and nutrient-rich spinach',
    weight: 0.4,
    dimensions: '7 x 3',
  },
  {
    id: 64928,
    productName: 'Grapes',
    category: 'fruit',
    productSku: 890123456789,
    color: 'purple',
    price: 3.49,
    availability: 'yes',
    availableQuantity: 40,
    description: 'Sweet and juicy purple grapes',
    weight: 0.5,
    dimensions: '5 x 5',
  },
  {
    id: 46219,
    productName: 'Cucumber',
    category: 'vegetable',
    productSku: 345678901234,
    color: 'green',
    price: 1.79,
    availability: 'no',
    availableQuantity: 55,
    description: 'Crunchy and refreshing green cucumber',
    weight: 0.3,
    dimensions: '8 x 2',
  },
  {
    id: 58134,
    productName: 'Orange',
    category: 'fruit',
    productSku: 901234567890,
    color: 'orange',
    price: 1.29,
    availability: 'yes',
    availableQuantity: 70,
    description: 'Citrusy and sweet orange',
    weight: 0.4,
    dimensions: '4 x 4',
  },
  {
    id: 72536,
    productName: 'Tomato',
    category: 'vegetable',
    productSku: 678901234567,
    color: 'red',
    price: 2.29,
    availability: 'no',
    availableQuantity: 50,
    description: 'Plump and flavorful red tomato',
    weight: 0.4,
    dimensions: '5 x 3',
  },
  {
    id: 29485,
    productName: 'Pear',
    category: 'fruit',
    productSku: 456789012345,
    color: 'green',
    price: 1.99,
    availability: 'no',
    availableQuantity: 65,
    description: 'Sweet and juicy green pear',
    weight: 0.35,
    dimensions: '3 x 3.5',
  },
  {
    id: 83749,
    productName: 'Bell Pepper',
    category: 'vegetable',
    productSku: 567890123401,
    color: 'yellow',
    price: 2.49,
    availability: 'yes',
    availableQuantity: 25,
    description: 'Vibrant and crisp yellow bell pepper',
    weight: 0.3,
    dimensions: '4 x 4',
  },
  {
    id: 19384,
    productName: 'Strawberry',
    category: 'fruit',
    productSku: 123401234567,
    color: 'red',
    price: 3.99,
    availability: 'yes',
    availableQuantity: 35,
    description: 'Sweet and succulent red strawberry',
    weight: 0.2,
    dimensions: '2.5 x 2.5',
  },
  {
    id: 50982,
    productName: 'Zucchini',
    category: 'vegetable',
    productSku: 234567890120,
    color: 'green',
    price: 1.69,
    availability: 'yes',
    availableQuantity: 60,
    description: 'Fresh and versatile green zucchini',
    weight: 0.35,
    dimensions: '6 x 2.5',
  },
  {
    id: 68374,
    productName: 'Pineapple',
    category: 'fruit',
    productSku: 890120123456,
    color: 'yellow',
    price: 4.49,
    availability: 'no',
    availableQuantity: 20,
    description: 'Sweet and tropical yellow pineapple',
    weight: 1.0,
    dimensions: '6 x 6',
  },
  {
    id: 24680,
    productName: 'Cabbage',
    category: 'vegetable',
    productSku: 678901234512,
    color: 'green',
    price: 2.79,
    availability: 'no',
    availableQuantity: 40,
    description: 'Crunchy and nutritious green cabbage',
    weight: 1.2,
    dimensions: '8 x 7',
  },
  {
    id: 73591,
    productName: 'Mango',
    category: 'fruit',
    productSku: 345612345678,
    color: 'orange',
    price: 2.99,
    availability: 'no',
    availableQuantity: 30,
    description: 'Exotic and sweet orange mango',
    weight: 0.6,
    dimensions: '5 x 4',
  },
  {
    id: 38472,
    productName: 'Potato',
    category: 'vegetable',
    productSku: 901234567890,
    color: 'brown',
    price: 0.99,
    availability: 'yes',
    availableQuantity: 80,
    description: 'Versatile and hearty brown potato',
    weight: 0.5,
    dimensions: '4 x 3',
  },
  {
    id: 59613,
    productName: 'Watermelon',
    category: 'fruit',
    productSku: 678901234561,
    color: 'green',
    price: 5.99,
    availability: 'yes',
    availableQuantity: 15,
    description: 'Refreshing and juicy green watermelon',
    weight: 5.0,
    dimensions: '10 x 8',
  },
  {
    id: 48236,
    productName: 'Cauliflower',
    category: 'vegetable',
    productSku: 123456789012,
    color: 'white',
    price: 3.29,
    availability: 'yes',
    availableQuantity: 25,
    description: 'Tender and nutritious white cauliflower',
    weight: 0.8,
    dimensions: '6 x 5',
  },
  {
    id: 92748,
    productName: 'Blueberries',
    category: 'fruit',
    productSku: 890123456789,
    color: 'blue',
    price: 4.79,
    availability: 'yes',
    availableQuantity: 30,
    description: 'Sweet and antioxidant-rich blueberries',
    weight: 0.2,
    dimensions: '3 x 3',
  },
  {
    id: 61529,
    productName: 'Eggplant',
    category: 'vegetable',
    productSku: 567890123401,
    color: 'purple',
    price: 2.39,
    availability: 'yes',
    availableQuantity: 35,
    description: 'Firm and flavorful purple eggplant',
    weight: 0.7,
    dimensions: '5 x 4',
  },
  {
    id: 37485,
    productName: 'Kiwi',
    category: 'fruit',
    productSku: 901234512345,
    color: 'brown',
    price: 2.89,
    availability: 'yes',
    availableQuantity: 40,
    description: 'Sweet and tangy brown kiwi',
    weight: 0.3,
    dimensions: '2.5 x 2.5',
  },
  {
    id: 20983,
    productName: 'Radish',
    category: 'vegetable',
    productSku: 234512345678,
    color: 'red',
    price: 1.29,
    availability: 'yes',
    availableQuantity: 50,
    description: 'Crunchy and peppery red radish',
    weight: 0.2,
    dimensions: '3 x 1.5',
  },
  {
    id: 84750,
    productName: 'Peach',
    category: 'fruit',
    productSku: 512345678901,
    color: 'orange',
    price: 2.69,
    availability: 'no',
    availableQuantity: 25,
    description: 'Juicy and fragrant orange peach',
    weight: 0.4,
    dimensions: '3.5 x 3.5',
  },
  {
    id: 56192,
    productName: 'Asparagus',
    category: 'vegetable',
    productSku: 789012345678,
    color: 'green',
    price: 3.99,
    availability: 'yes',
    availableQuantity: 20,
    description: 'Tender and flavorful green asparagus',
    weight: 0.3,
    dimensions: '6 x 1',
  },
  {
    id: 47823,
    productName: 'Cherry',
    category: 'fruit',
    productSku: 234561234567,
    color: 'red',
    price: 4.49,
    availability: 'yes',
    availableQuantity: 15,
    description: 'Sweet and plump red cherries',
    weight: 0.3,
    dimensions: '2 x 2',
  },
];

const productColumns: ITableColumn<Product>[] = [
  {
    key: 'productName',
    dataIndex: 'productName',
    width: '150px',
    title: 'Product name',
    sticky: true,
  },
  {
    key: 'id',
    dataIndex: 'id',
    width: '150px',
    title: 'ID',
  },

  {
    key: 'category',
    dataIndex: 'category',
    width: '150px',
    title: 'Category',
  },
  {
    key: 'productSku',
    dataIndex: 'productSku',
    width: '150px',
    title: 'SKU',
  },
  {
    key: 'color',
    dataIndex: 'color',
    width: '150px',
    title: 'Color',
  },
  {
    key: 'price',
    dataIndex: 'price',
    width: '150px',
    title: 'Price',
  },
  {
    key: 'availability',
    dataIndex: 'availability',
    width: '150px',
    title: 'Availability',
  },
  {
    key: 'availableQuantity',
    dataIndex: 'availableQuantity',
    width: '150px',
    title: 'Available quantity',
  },
  {
    key: 'description',
    dataIndex: 'description',
    width: '150px',
    title: 'Description',
  },
  {
    key: 'weight',
    dataIndex: 'weight',
    width: '150px',
    title: 'Weight',
  },
  {
    key: 'dimensions',
    dataIndex: 'dimensions',
    width: '150px',
    title: 'Dimensions',
  },
];

const getCodeSnippet = () => {
  return (
    <div>
      <h2>This is an H2 Heading</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget velit nec elit accumsan
        accumsan ut id libero.
      </p>
      <p>
        Quisque at tristique orci. Integer et purus nec ligula interdum maximus. Integer tincidunt,
        velit vitae elementum vulputate, arcu elit convallis ligula, in cursus libero nisl id
        sapien.
      </p>
      <p>
        Sed ut luctus dui. In hac habitasse platea dictumst. Ut vehicula, odio a accumsan
        ullamcorper, urna ligula tristique libero, vel eleifend sem quam vitae ligula.
      </p>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ol>
      <Icons name='instagram' />
      <Icons name='facebook' />
      <Icons name='linkedin' />
    </div>
  );
};

const tableDataOptions = [
  { label: 'With data', value: 'withData', disabled: false },
  { label: 'Data is loading - default', value: 'loadingData', disabled: false },
  { label: 'No data', value: 'noData', disabled: false },
];

//Table 3
interface Buildings {
  id: number;
  name: string;
  country: string;
  city: string;
  heightInMeters: number;
  builtYear: number;
  quantityOfFloors: number;
  architecturalStyle: string;
  constructionStarted: string;
  buildingCompleted: string;
  buildingCost: string;
  photo: string;
}

const buildings: Buildings[] = [
  {
    id: 1,
    name: 'Burj Khalifa',
    country: 'United Arab Emirates',
    city: 'Dubai',
    heightInMeters: 828,
    builtYear: 2010,
    quantityOfFloors: 163,
    architecturalStyle: 'Modern',
    constructionStarted: '21 September 2004',
    buildingCompleted: '4 January 2010',
    buildingCost: 'Approximately US$1.5 billion',
    photo: '11111',
  },
  {
    id: 2,
    name: 'Shanghai Tower',
    country: 'China',
    city: 'Shanghai',
    heightInMeters: 632,
    builtYear: 2015,
    quantityOfFloors: 128,
    architecturalStyle: 'Modern',
    constructionStarted: '29 November 2008',
    buildingCompleted: '17 September 2015',
    buildingCost: 'Approximately US$2.4 billion',
    photo: '11111',
  },
  {
    id: 3,
    name: 'Abraj Al Bait Clock Tower',
    country: 'Saudi Arabia',
    city: 'Mecca',
    heightInMeters: 601,
    builtYear: 2012,
    quantityOfFloors: 120,
    architecturalStyle: 'Islamic',
    constructionStarted: '2004',
    buildingCompleted: '2012',
    buildingCost: 'Approximately US$15 billion',
    photo: '11111',
  },
  {
    id: 4,
    name: 'Ping An Finance Center',
    country: 'China',
    city: 'Shenzhen',
    heightInMeters: 599,
    builtYear: 2017,
    quantityOfFloors: 115,
    architecturalStyle: 'Modern',
    constructionStarted: '24 August 2010',
    buildingCompleted: '17 October 2016',
    buildingCost: 'Approximately US$1.5 billion',
    photo: '11111',
  },
  {
    id: 5,
    name: 'Lotte World Tower',
    country: 'South Korea',
    city: 'Seoul',
    heightInMeters: 555,
    builtYear: 2017,
    quantityOfFloors: 123,
    architecturalStyle: 'Modern',
    constructionStarted: '2009',
    buildingCompleted: '2016',
    buildingCost: 'Approximately US$3.4 billion',
    photo: '11111',
  },
  {
    id: 6,
    name: 'One World Trade Center',
    country: 'USA',
    city: 'New York City',
    heightInMeters: 541,
    builtYear: 2014,
    quantityOfFloors: 104,
    architecturalStyle: 'Modern',
    constructionStarted: '27 April 2006',
    buildingCompleted: '3 November 2014',
    buildingCost: 'Approximately US$3.9 billion',
    photo: '11111',
  },
  {
    id: 7,
    name: 'Guangzhou CTF Finance Centre',
    country: 'China',
    city: 'Guangzhou',
    heightInMeters: 530,
    builtYear: 2016,
    quantityOfFloors: 111,
    architecturalStyle: 'Modern',
    constructionStarted: '29 November 2009',
    buildingCompleted: '10 October 2016',
    buildingCost: 'Approximately US$1.5 billion',
    photo: '11111',
  },
  {
    id: 8,
    name: 'Tianjin CTF Finance Centre',
    country: 'China',
    city: 'Tianjin',
    heightInMeters: 530,
    builtYear: 2019,
    quantityOfFloors: 98,
    architecturalStyle: 'Modern',
    constructionStarted: '2013',
    buildingCompleted: '2019',
    buildingCost: 'Approximately US$1.5 billion',
    photo: '11111',
  },
  {
    id: 9,
    name: 'CITIC Tower',
    country: 'China',
    city: 'Beijing',
    heightInMeters: 528,
    builtYear: 2018,
    quantityOfFloors: 108,
    architecturalStyle: 'Modern',
    constructionStarted: '2010',
    buildingCompleted: '2018',
    buildingCost: 'Approximately US$3 billion',
    photo: '11111',
  },
  {
    id: 10,
    name: 'TAIPEI 101',
    country: 'Taiwan',
    city: 'Taipei',
    heightInMeters: 508,
    builtYear: 2004,
    quantityOfFloors: 101,
    architecturalStyle: 'Postmodern',
    constructionStarted: '13 July 1999',
    buildingCompleted: '31 December 2004',
    buildingCost: 'Approximately US$1.8 billion',
    photo: '11111',
  },
  {
    id: 11,
    name: 'Shanghai World Financial Center',
    country: 'China',
    city: 'Shanghai',
    heightInMeters: 492,
    builtYear: 2008,
    quantityOfFloors: 101,
    architecturalStyle: 'Modern',
    constructionStarted: '1997',
    buildingCompleted: '2008',
    buildingCost: 'Approximately US$1.2 billion',
    photo: '11111',
  },
  {
    id: 12,
    name: 'International Commerce Centre',
    country: 'Hong Kong',
    city: 'China',
    heightInMeters: 484,
    builtYear: 2010,
    quantityOfFloors: 118,
    architecturalStyle: 'Modern',
    constructionStarted: '2002',
    buildingCompleted: '2010',
    buildingCost: 'Approximately US$1.5 billion',
    photo: '11111',
  },
  {
    id: 13,
    name: 'Central Park Tower',
    country: 'USA',
    city: 'New York City',
    heightInMeters: 472,
    builtYear: 2020,
    quantityOfFloors: 131,
    architecturalStyle: 'Modern',
    constructionStarted: '2014',
    buildingCompleted: '2020',
    buildingCost: 'Approximately US$3 billion',
    photo: '11111',
  },
  {
    id: 14,
    name: 'Lakhta Center',
    country: 'Russia',
    city: 'St. Petersburg',
    heightInMeters: 462,
    builtYear: 2019,
    quantityOfFloors: 87,
    architecturalStyle: 'Eclecticism',
    constructionStarted: '2012',
    buildingCompleted: '2018',
    buildingCost: 'Approximately US$1.8 billion',
    photo: '11111',
  },
  {
    id: 15,
    name: 'Vincom Landmark 81',
    country: 'Vietnam',
    city: 'Ho Chi Minh City',
    heightInMeters: 461,
    builtYear: 2018,
    quantityOfFloors: 81,
    architecturalStyle: 'Modern',
    constructionStarted: '2014',
    buildingCompleted: '2018',
    buildingCost: 'Approximately US$1.5 billion',
    photo: '11111',
  },
  {
    id: 16,
    name: 'Changsha IFS Tower T1',
    country: 'China',
    city: 'Changsha',
    heightInMeters: 452,
    builtYear: 2018,
    quantityOfFloors: 94,
    architecturalStyle: 'Modern',
    constructionStarted: '2013',
    buildingCompleted: '2018',
    buildingCost: 'Approximately US$1.5 billion',
    photo: '11111',
  },
  {
    id: 17,
    name: 'Petronas Towers',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    heightInMeters: 451.9,
    builtYear: 1998,
    quantityOfFloors: 88,
    architecturalStyle: 'Postmodern',
    constructionStarted: '1 March 1993',
    buildingCompleted: '1 March 1996',
    buildingCost: 'Approximately US$1.6 billion',
    photo: '11111',
  },
  {
    id: 18,
    name: 'Zifeng Tower',
    country: 'China',
    city: 'Nanjing',
    heightInMeters: 450,
    builtYear: 2009,
    quantityOfFloors: 89,
    architecturalStyle: 'Modern',
    constructionStarted: '2005',
    buildingCompleted: '2009',
    buildingCost: 'Approximately US$700 million',
    photo: '11111',
  },
  {
    id: 19,
    name: 'Willis Tower (Sears Tower)',
    country: 'USA',
    city: 'Chicago',
    heightInMeters: 442,
    builtYear: 1973,
    quantityOfFloors: 108,
    architecturalStyle: 'Modern',
    constructionStarted: 'August 1970',
    buildingCompleted: 'September 1973',
    buildingCost: 'Approximately US$150 million',
    photo: '11111',
  },
  {
    id: 20,
    name: 'KK100',
    country: 'China',
    city: 'Shenzhen',
    heightInMeters: 442,
    builtYear: 2011,
    quantityOfFloors: 100,
    architecturalStyle: 'Modern',
    constructionStarted: '2008',
    buildingCompleted: '2011',
    buildingCost: 'Approximately US$1.5 billion',
    photo: '11111',
  },
];

const buildingColumns: ITableColumn<Buildings>[] = [
  {
    key: 'id',
    dataIndex: 'id',
    title: 'ID',
    width: '60px',
    minWidth: '60px',
    sticky: true,
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
    width: '250px',
    minWidth: '250px',
    sticky: true,
  },
  {
    key: 'photo',
    dataIndex: 'photo',
    width: 30,
    title: 'Upload photo',
    minWidth: '200px',
    renderCell: () => {
      return (
        <Button
          variant='secondary'
          onClick={(e) => {
            e.stopPropagation();
            alert('Upload button clicked');
          }}
        >
          Upload photo
          <Icons name='image' />
        </Button>
      );
    },
    renderTitle: () => {
      return (
        <img
          style={{ width: '100px', height: '48px', margin: '0 auto' }}
          alt='buildings'
          src='https://media.npr.org/assets/img/2011/11/07/supertall__eights-dabcdd10d587f7d72ef53234c1583b8ad9ed01be.jpg?s=5'
        />
      );
    },
  },
  {
    key: 'country',
    dataIndex: 'country',
    title: 'Country',
    width: 20,
    minWidth: '150px',
  },
  {
    key: 'city',
    dataIndex: 'city',
    title: 'City',
    width: 30,
    minWidth: '150px',
  },
  {
    key: 'heightInMeters',
    dataIndex: 'heightInMeters',
    title: 'Height(m)',
    minWidth: '100px',
    width: 30,
  },
  {
    key: 'builtYear',
    dataIndex: 'builtYear',
    title: 'Built year',
    width: 30,
    minWidth: '100px',
  },
  {
    key: 'quantityOfFloors',
    dataIndex: 'quantityOfFloors',
    title: 'Floors',
    width: 30,
    minWidth: '100px',
  },
  {
    key: 'architecturalStyle',
    dataIndex: 'architecturalStyle',
    title: 'Style',
    width: 20,
    minWidth: '100px',
  },
  {
    key: 'constructionStarted',
    dataIndex: 'constructionStarted',
    title: 'Construction started',
    width: 30,
    minWidth: '200px',
  },
  {
    key: 'buildingCompleted',
    dataIndex: 'buildingCompleted',
    title: 'Building completed',
    width: 30,
    minWidth: '200px',
  },
  {
    key: 'buildingCost',
    dataIndex: 'buildingCost',
    title: 'Cost',
    width: 50,
    minWidth: '250px',
  },
];

storiesOf('Table', module).add('Default', () => {
  const [selectedValue, setSelectedValue] = useState('withData');
  const [headerHeight, setHeaderHeight] = useState<number>(48);
  const [rowHeight, setRowHeight] = useState<number>(48);

  const onSelect = (selectedValue) => {
    setSelectedValue(selectedValue);
  };

  const handleHeaderHeightChange = (e) => {
    setHeaderHeight(Number(e.target.value));
  };

  const handleRowHeightChange = (e) => {
    setRowHeight(Number(e.target.value));
  };

  return (
    <div>
      <p>Default table (headerHeight: 48, rowHeight: 48, no sticky columns) </p>
      <p>While using onSelect function you can get all data about the clicked row</p>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
        <Input placeholder='Insert header height' onChange={handleHeaderHeightChange} width='200' />
        <Input placeholder='Insert row height' onChange={handleRowHeightChange} width='200' />
      </div>
      <div style={{ height: '400px', overflow: 'hidden', marginBottom: '16px' }}>
        <Table<User>
          columns={columns}
          dataList={users}
          rowKey='id'
          headerHeight={Number(headerHeight)}
          rowHeight={Number(rowHeight)}
          onSelectRow={(record) => {
            alert(
              `On row click you got all data about this row. For example: Name of selected row is ${record.name}. You can see full object in console.`
            );
            console.log(record);
          }}
        />
      </div>

      <p>Sticky column `name`, horizontal and vertical scroll</p>
      <p>You can pass emptyState which will be rendered if no data got.</p>
      <RadioGroup options={tableDataOptions} selectedValue={selectedValue} onSelect={onSelect} />
      <div style={{ height: '500px', overflow: 'hidden' }}>
        <Table<Product>
          columns={productColumns}
          dataList={selectedValue === 'noData' ? [] : products}
          emptyState={<div>You have no data for table</div>}
          rowKey='id'
          isLoading={selectedValue === 'loadingData' ? true : false}
        />
      </div>

      <p>You can pass custom table body using `tableBody` attribute (has higher priority). </p>
      <div style={{ height: '200px', overflow: 'hidden' }}>
        <Table<Product>
          columns={productColumns}
          dataList={products}
          rowKey='id'
          tableBody={getCodeSnippet}
        />
      </div>

      <p>
        You can control width of columns using combination of minWidth, width in px or
        proportionally.
      </p>
      <p>
        Also you can use renderCell and renderTitle functions to pass custom content into the
        cell/header cell. Upload photo contains button with text and icon inside.
      </p>
      <div style={{ height: '400px', overflow: 'hidden' }}>
        <Table columns={buildingColumns} dataList={buildings} rowKey='id' />
      </div>
    </div>
  );
});

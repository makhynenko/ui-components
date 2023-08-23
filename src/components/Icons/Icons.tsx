import React from 'react';
import './icons.scss';

import { ReactComponent as Cross } from './Assets/Cross.svg';


export interface IconsProps {
  name?: string,
  color?: string,
  onClick?: () => void
}

export const Icons: React.FC<IconsProps> = ({ children }) => {

  return (
    <Cross />
  );
}

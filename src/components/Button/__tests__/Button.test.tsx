import React from 'react';
import { Button, ButtonProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ButtonProps = {
  
};

const setup = (props = defaultProps) => render(<Button {...props} />);

describe('Button', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});

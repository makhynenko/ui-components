import React from 'react';
import { Button } from '..';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  it('renders', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test'));
  });
});

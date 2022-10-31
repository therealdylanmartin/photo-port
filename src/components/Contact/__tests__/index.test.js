import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  // Render Test
  it('renders', () => {
    render(<ContactForm />);
  });

  // Snapshot Test
  it('matches snapshot DOM node structure', () => {
    // render ContactForm
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Renders h1 tag "Contact me"
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  })

  // Renders button tag "Submit"
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('buttontag')).toHaveTextContent('Submit');
  })
})
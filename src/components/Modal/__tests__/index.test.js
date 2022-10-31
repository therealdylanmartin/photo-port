import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const photo = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};
const mockToggleModal = jest.fn();

afterEach(cleanup);

describe('Modal component', () => {
  it('renders', () => {
    render(<Modal
      currentPhoto={photo}
      onClose={mockToggleModal}
    />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Modal
      currentPhoto={photo}
      onClose={mockToggleModal}
    />)
    expect(asFragment()).toMatchSnapshot();
  })
})

describe('Click event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(<Modal
      currentPhoto={photo}
      onClose={mockToggleModal}
    />)
    // Act: Simulate click event
    fireEvent.click(getByText('Close this modal'));
    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
}) 
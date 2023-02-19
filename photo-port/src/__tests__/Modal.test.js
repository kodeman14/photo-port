import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../components/Modal'

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1,
}
const mockToggleModal = jest.fn()

afterEach(cleanup)

describe('Modal is rendering', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    )
    expect(getByTestId('h3tag')).toHaveTextContent(currentPhoto.name)
  })

  it('matches snapshot', () => {
    // Arrange the snapshot - declare variables
    const { asFragment } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    )

    // Assert the match
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Click Event', () => {
  it('calls onClose handler', () => {
    // Arrange: Render Modal
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    )

    // Act: Simulate click event
    fireEvent.click(getByText('Close this modal'))

    // Assert: Expected matcher
    expect(mockToggleModal).toHaveBeenCalledTimes(1)
  })
})

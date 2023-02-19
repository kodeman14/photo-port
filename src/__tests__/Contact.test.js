import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '../components/Contact'

afterEach(cleanup)

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('text is visible', () => {
  it('inserts text into the h1 tag', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
  })

  it('inserts text into the button tag', () => {
    const { getByTestId } = render(<Contact />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })
})

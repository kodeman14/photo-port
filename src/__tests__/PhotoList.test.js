import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../components/PhotoList'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList />)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList />)
    expect(asFragment()).toMatchSnapshot()
  })
})

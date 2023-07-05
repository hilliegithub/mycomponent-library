import React from 'react'
import '@testing-library/jest-dom'
import { getByText, render, screen } from '@testing-library/react'

import Button from './Buttton'

describe('Running test for the Button component', () => {
  it('Testing to see if the Button component is visible', () => {
    const value = 'Press!'
    render(<Button text={value} bgColor='#1e81b0' />)
    expect(screen.getByText(value)).toBeVisible()
  })

  it('Testing to see if the Button component changes background color when disable', () => {
    render(<Button text='ice' bgColor='red' disabled={true} />)
    expect(screen.getByText('ice')).toHaveStyle('background-color: #a8a8a7')
  })
})

import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import React from 'react'

import Radio from './Radio'

describe('Running test for the Radio component', () => {
  test('Testing to see if the radio component is visible', () => {
    render(<Radio options={['f35']} />)
    expect(screen.getByText('f35')).toBeVisible()
  })

  test('testing to see if the Radio background color changes when disabled', () => {
    const { container } = render(<Radio bgColor='red' disabled={true} options={['f35']} />)
    const RadioEle = container.querySelector('fieldset')
    expect(RadioEle).toHaveStyle('background-color: #f3c6c9')
  })
})

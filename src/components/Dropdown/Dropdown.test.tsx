import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import React from 'react'
import Dropdown from './Dropdown'

describe('Running Test for the Dropdown', () => {
  test('Testing to see if the dropdown is visible', () => {
    render(<Dropdown options={['option1', 'option2']} />)
    expect(screen.getByText('option1')).toBeVisible()
  })

  test('testing to see if the Dropdown background color changes when disabled', () => {
    const { container } = render(<Dropdown bgColor='red' disabled={true} options={[]} />)
    const DropdownEle = container.querySelector('select')
    expect(DropdownEle).toHaveStyle('background-color: #f2c3c2')
  })
})

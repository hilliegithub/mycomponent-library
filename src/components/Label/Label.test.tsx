import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Label from './Label'

describe('Running Test for the Label component', () => {
  test('Testing to see if the Label component is visible', () => {
    render(<Label bgColor='#95fe13' value='label' />)
    const component = screen.getByText('label')
    expect(component).toBeVisible()
  })

  test('Testing to see if the Label component changes background color when disabled', () => {
    render(<Label value='label' bgColor='green' disabled={true} />)
    expect(screen.getByText('label')).toHaveStyle('background-color: gray')
  })
})

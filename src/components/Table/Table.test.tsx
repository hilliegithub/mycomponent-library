import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Table from './Table'

describe('Running Test for the Table Component', () => {
  test('Testing to see if the table visible', () => {
    render(<Table header='MyTestTable' colHeaders={[]} tableValues={[]} />)
    expect(screen.getByText('MyTestTable')).toBeVisible()
  })

  test('Testing to see if the Table background color changes when disabled', () => {
    const { container } = render(
      <Table header='Peach' colHeaders={[]} tableValues={[]} disabled={true} bgColor='orange' />,
    )
    const tableElement = container.querySelector('table')
    expect(tableElement).toHaveStyle('background-color: red')
  })
})

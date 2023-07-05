import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import Hero from './Hero'
import React from 'react'

describe('Testing the Hero component', () => {
  test('Testing to see is the Hero Image it visible', () => {
    render(<Hero HeroText='oou' />)
    const hero = screen.getByText('oou')
    expect(hero).toBeVisible()
  })
  test('Testing to see if the Hero background changes when disabled', () => {
    render(<Hero HeroText='oou' disabled={true} />)
    const hero = screen.getByText('oou')
    expect(hero).toHaveStyle(`
    background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(path/to/image.jpg);
  `)
  })
})

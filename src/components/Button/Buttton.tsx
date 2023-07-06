import { ButtonProps } from './Button.types'
import styled from 'styled-components'
import React from 'react'

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (props.disabled ? '#a8a8a7' : props.bgColor)};
  padding: 0.5rem 0;
  font-size: 1em;
  font-color: ${(props) => (props.disabled ? 'red' : 'black')}
  margin: 0.5rem 1rem;
  width: 11em;
  border: 1px solid black;
  border-radius: 3px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const Button: React.FC<ButtonProps> = ({
  text = 'Hyltons-Button',
  bgColor = '#d28266',
  disabled = false,
  fontColor = 'black',
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      disabled={disabled}
      font-color={fontColor}
      onClick={() => alert('Responsive!')}
    >
      {text}
    </StyledButton>
    // <div>{text}</div>
  )
}

export default Button

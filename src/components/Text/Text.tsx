import { TextProps } from './Text.types'
import styled from 'styled-components'
import React from 'react'

const StyledText = styled.textarea<TextProps>`
  background: ${(props) => (props.disabled ? '#a8a8a7' : props.bgColor)};
  font-size: 1em;
  color: ${(props) => props.fontColor};
  font-weight: bold;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-radius: 3px;
  max-width: 500px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const Text: React.FC<TextProps> = ({
  value = 'Defaulty Text',
  bgColor = '#5df75d',
  disabled = false,
  fontColor,
}) => {
  return (
    <StyledText
      bgColor={bgColor}
      fontColor={fontColor}
      value={value}
      disabled={disabled}
    ></StyledText>
  )
}

export default Text

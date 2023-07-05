import React from 'react'
import { DropdownProps } from './Dropdown.types'
import styled from 'styled-components'

const StyledDropdown = styled.select<DropdownProps>`
  padding: 2px 5px;
  max-width: fit-content;
  background-color: ${(props) => (props.disabled ? '#f2c3c2' : props.bgColor)};
  color: black;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, bgColor }) => {
  return (
    <StyledDropdown options={options} disabled={disabled} bgColor={bgColor}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </StyledDropdown>
  )
}

export default Dropdown

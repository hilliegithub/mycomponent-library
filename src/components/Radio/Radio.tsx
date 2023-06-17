import React from "react";
import { RadioProps } from "./Radio.types";
import styled from "styled-components";

const StyledRadio = styled.fieldset<RadioProps>`
  width: 35vw;
  color: ${(props) => props.fontColor};
  background: ${(props) => (!props.disabled ? "#f3c6c9" : props.bgColor)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Radio: React.FC<RadioProps> = ({
  options,
  disabled,
  bgColor,
  fontColor,
}) => {
  return (
    <StyledRadio
      options={options}
      font-color={fontColor}
      disabled={disabled}
      bgColor={bgColor}
    >
      <legend>Select a maintenance drone:</legend>

      {options.map((opt) => (
        <div>
          <input
            type="radio"
            color={fontColor}
            id={opt}
            name="drone"
            value={opt}
          />
          <label>{opt}</label>
        </div>
      ))}
    </StyledRadio>
  );
};

export default Radio;

import React from "react";
import { RadioProps } from "./Radio.types";
import styled from "styled-components";

const RadioWrapper = styled.div<RadioProps>`
  display: inline-block;
  margin-right: 10px;
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    color: #ff5722;
  }
`;

const RadioLabel = styled.label`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Radio: React.FC<RadioProps> = ({
  options,
  disabled,
  bgColor,
  fontColor,
}) => {
  return (
    <div>
      {options.map((option, index) => (
        <RadioWrapper
          key={index}
          options={options}
          fontColor={fontColor}
          disabled={disabled}
          bgColor={bgColor}
        >
          <RadioInput
            color={fontColor}
            name="drone"
            type="radio"
            id={`radio-${index}`}
            value={option}
          />
          <RadioLabel htmlFor={`radio-${index}`}>{option}</RadioLabel>
        </RadioWrapper>
      ))}
    </div>
  );
};

export default Radio;

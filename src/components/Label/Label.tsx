import { LabelProps } from "./Label.types";
import React, { FC } from "react";
import styled from "styled-components";

const StyledLabel = styled.label<LabelProps>`
  padding: 0.5em 0.5em;
  max-width: fit-content;
  background: ${(props) => (props.disabled ? "gray" : props.bgColor)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Label: React.FC<LabelProps> = ({
  disabled = false,
  value = "Default Text",
  bgColor = "#eab676",
}) => {
  return (
    <StyledLabel disabled={disabled} bgColor={bgColor}>
      {value}
    </StyledLabel>
  );
};

export default Label;

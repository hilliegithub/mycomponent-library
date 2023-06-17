import React from "react";
import { ImgProps } from "./Img.types";
import styled from "styled-components";

const StyledImg = styled.img<ImgProps>`
  width: 350px;
  height: 400px;
  padding: 7px;
  border: 1px solid black;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background: ${(props) => (!props.disabled ? props.bgColor : "red")};
`;

const Img: React.FC<ImgProps> = ({ src, disabled, bgColor }) => {
  return <StyledImg src={src} disabled={disabled} bgColor={bgColor} />;
};

export default Img;

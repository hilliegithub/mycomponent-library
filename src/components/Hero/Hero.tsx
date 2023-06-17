import React from "react";
import { HeroProps } from "./Hero.types";
import styled from "styled-components";

const StyleHeroImage = styled.div<HeroProps>`
  width: 95vw;
  height: 95vh;
  border: 1px solid black;
  background-size: cover;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-image: ${(props) =>
    props.disabled
      ? `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url(${props.src})`
      : `url(${props.src})`};

  h1 {
    text-align: center;
  }
`;

const Hero: React.FC<HeroProps> = ({ src, disabled, HeroText }) => {
  return (
    <StyleHeroImage src={src} HeroText={HeroText} disabled={disabled}>
      <h1>{HeroText}</h1>
    </StyleHeroImage>
  );
};

export default Hero;

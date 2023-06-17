import React from "react";
import { CardProps } from "./Card.types";
import styled from "styled-components";

const StyledCard = styled.div<CardProps>`
  margin: 1em;
  padding: 0.25em 1em;
  background-color: ${(props) => (props.disabled ? "#e9f5f9" : props.bgColor)};
  border: 2px solid ${(props) => (!props.disabled ? "#bf4f74" : "undefined")};
  border-radius: 3px;
  display: flex;
  max-width: 500px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  h1 {
    color: #bf4f74;
  }
  img {
    width: 350px;
    height: 400px;
    margin: auto;
  }
  p {
    font-size: 1.4rem;
  }
`;

const Card: React.FC<CardProps> = ({
  cardTitle = "Card Title",
  cardDesc = "Card Description",
  img,
  disabled,
  bgColor,
}) => {
  return (
    <StyledCard disabled={disabled} bgColor={bgColor}>
      <img src={img} alt="" />
      <h1>{cardTitle}</h1>
      <p>{cardDesc}</p>
    </StyledCard>
  );
};

export default Card;

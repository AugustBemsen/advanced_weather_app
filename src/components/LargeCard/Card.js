import React from "react";
import styled from "styled-components";

const Card = ({ type, value, footer }) => {
  return (
    <>
      <CardStyles footer={footer}>
        <p>{type}</p>
        {value}
        {footer}
      </CardStyles>
    </>
  );
};

export default Card;
const CardStyles = styled.div`
  width: 100%;
  background: var(--secondary-color);
  padding: 1.4rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;

  p {
    font-size: 0.95rem;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: ${({ footer }) => footer && "1rem"};

    span {
      font-size: 1.8rem;
    }
  }
`;

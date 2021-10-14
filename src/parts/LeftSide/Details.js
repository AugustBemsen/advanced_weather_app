import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";

const Details = () => {
  return (
    <>
      <DetailsStyles>
        <h1>
          15<span>&#8451;</span>
        </h1>
        <h3>Shower</h3>
        <p>Today - Fri 5 Jun</p>
        <p>
          <IoLocationSharp /> Abuja
        </p>
      </DetailsStyles>
    </>
  );
};

export default Details;
const DetailsStyles = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 5rem;

    span {
      font-size: 2rem;
      font-weight: 200;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem 0;
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 0.3rem;
    }
  }

`;

import React from "react";
import styled from "styled-components";
import Highlights from "./Highlights";
import NextForecast from "./NextForecast";

const RightSide = () => {

  

  return (
    <>
      <RightSideStyles>
        <NextForecast />
        <Highlights />
      </RightSideStyles>
    </>
  );
};

export default RightSide;
const RightSideStyles = styled.div`
  width: 72%;
  padding: 2rem 5rem 5rem 6rem;
  overflow-y: scroll;
  color: var(--white-color);
  background: var(--primary-color);

  @media screen and (max-width: 789px) {
    width: 68%;
    padding: 2rem 2.2rem 4rem 2.2rem;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

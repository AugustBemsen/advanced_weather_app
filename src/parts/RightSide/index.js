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
`;

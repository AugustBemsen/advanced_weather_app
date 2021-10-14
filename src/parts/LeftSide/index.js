import React from "react";
import styled from "styled-components";
import Clouds from "./Clouds";
import Details from "./Details";
import TopCta from "./TopCta";

const LeftSide = () => {
  return (
    <>
      <LeftSideStyles>
        <TopCta />
        <Clouds />
        <Details />
      </LeftSideStyles>
    </>
  );
};

export default LeftSide;
const LeftSideStyles = styled.div`
  width: 28%;
  background: var(--secondary-color);
  padding: 2rem 0;
  overflow: hidden;
`;

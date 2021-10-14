import React from "react";
import styled from "styled-components";

const LeftSide = () => {
  return (
    <>
      <LeftSideStyles>Left side</LeftSideStyles>
    </>
  );
};

export default LeftSide;
const LeftSideStyles = styled.div`
  width: 28%;
  background: var(--secondary-color);
  padding: 2rem;
`;

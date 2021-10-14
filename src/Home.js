import React from "react";
import styled from "styled-components";
import LeftSide from "./parts/LeftSide";
import RightSide from "./parts/RightSide";

const Home = () => {
  return (
    <>
      <HomeStyles>
        <LeftSide />
        <RightSide />
      </HomeStyles>
    </>
  );
};

export default Home;
const HomeStyles = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
`;

import React from "react";
import styled from "styled-components";
import LeftSide from "./parts/LeftSide/index";
import RightSide from "./parts/RightSide/index";

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
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 680px) {
    display: block;
    overflow: scroll;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import Drawer from "../../components/Drawer/Drawer";
import Search from "../Drawer/Search";
import Clouds from "./Clouds";
import Details from "./Details";
import TopCta from "./TopCta";

const LeftSide = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);
  return (
    <>
      <LeftSideStyles>
        <Drawer
          open={openDrawer}
          close={toggleDrawer}
          children={<Search close={toggleDrawer} />}
        />
        <TopCta btnFx={toggleDrawer} />
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
  color: var(--white-color);
  padding: 2rem 0;
  overflow: hidden;

  @media screen and (max-width: 789px) {
    width: 33%;
  }

  @media screen and (max-width: 680px) {
    width: 100%;
  }
`;

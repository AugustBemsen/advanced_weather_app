import axios from "axios";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "./context/appContext";
import LeftSide from "./parts/LeftSide/index";
import RightSide from "./parts/RightSide/index";

const Home = () => {
  // Context API
  const [appState, setAppState] = useContext(AppContext);

  const { woeid } = appState;

  useEffect(() => {
    axios
      .get(`https://www.metaweather.com/api/location/${woeid}`)
      .then((res) => {
        setAppState((prev) => {
          return {
            ...prev,
            weather: res.data?.consolidated_weather,
            title: res.data?.title,
            active: res.data.consolidated_weather[0],
          };
        });
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [woeid]);

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

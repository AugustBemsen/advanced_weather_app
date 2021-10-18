import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./components/Loader/Loader";
import { AppContext } from "./context/appContext";
import LeftSide from "./parts/LeftSide/index";
import RightSide from "./parts/RightSide/index";

const Home = () => {
  // Context API
  const [appState, setAppState] = useContext(AppContext);

  const { woeid } = appState;

  const [loading, setLoading] = useState(true);

  // get user location
  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(`/json/${key}`)
      .then((res) => {
        setAppState((prev) => {
          return {
            ...prev,
            state: res.data?.city ? res.data?.city : res.data?.country_name,
          };
        });
      })
      .catch(() => {
        setAppState((prev) => {
          return {
            ...prev,
            state: "paris",
          };
        });
      });

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLoading(true);
    if (woeid) {
      axios
        .get(`/location/${woeid}/`)
        .then((res) => {
          setLoading(false);
          setAppState((prev) => {
            return {
              ...prev,
              weather: res.data?.consolidated_weather,
              title: res.data?.title,
              active: res.data.consolidated_weather[0],
            };
          });
        })
        .catch((err) => {
          alert("No Result!");
          setAppState((prev) => {
            return {
              ...prev,
              loading: false,
            };
          });
        });
    }
    // eslint-disable-next-line
  }, [woeid]);

  return (
    <>
      <HomeStyles>
        {loading && <Loader />}
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

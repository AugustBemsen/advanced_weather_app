import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/appContext";
import images from "../../imgs";
import imgController from "../../lib/imgController";

const Clouds = () => {
  const { heavy_cloud } = images;

  const [appState] = useContext(AppContext);

  const { active } = appState;

  return (
    <>
      <CloudsStyles>
        <img className="cloud1" src={heavy_cloud} alt="current weather" />
        <img className="cloud2" src={heavy_cloud} alt="current weather" />

        <img
          className="cloud_main"
          src={imgController(active.weather_state_abbr)}
          alt="current weather"
        />

        <img className="cloud3" src={heavy_cloud} alt="current weather" />
        <img className="cloud4" src={heavy_cloud} alt="current weather" />
      </CloudsStyles>
    </>
  );
};

export default Clouds;
const CloudsStyles = styled.div`
  position: relative;
  margin: 2rem auto 1.5rem;
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .cloud_main {
    width: 130px;
  }

  .cloud1 {
    width: 120px;
    position: absolute;
    left: -50px;
    top: 0;
    opacity: 0.1;
  }
  .cloud2 {
    width: 150px;
    position: absolute;
    top: 0;
    right: -70px;
    opacity: 0.1;
  }
  .cloud3 {
    width: 120px;
    position: absolute;
    right: -70px;
    bottom: 0;
    opacity: 0.1;
  }
  .cloud4 {
    width: 120px;
    position: absolute;
    left: -50px;
    bottom: 0;
    opacity: 0.1;
    opacity: 0.1;
  }
`;

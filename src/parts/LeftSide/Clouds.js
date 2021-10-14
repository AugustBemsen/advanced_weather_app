import React from "react";
import styled from "styled-components";
import images from "../../imgs";

const Clouds = () => {
  const { shower, heavy_cloud } = images;
  return (
    <>
      <CloudsStyles>
        <img className="cloud1" src={heavy_cloud} alt="current weather" />
        <img className="cloud2" src={heavy_cloud} alt="current weather" />

        <img className="cloud_main" src={shower} alt="current weather" />

        <img className="cloud3" src={heavy_cloud} alt="current weather" />
        <img className="cloud4" src={heavy_cloud} alt="current weather" />
      </CloudsStyles>
    </>
  );
};

export default Clouds;
const CloudsStyles = styled.div`
  position: relative;
  margin: 2rem auto;
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .cloud_main {
    width: 180px;
  }

  .cloud1 {
    width: 120px;
    position: absolute;
    left: -50px;
    top: 0;
  }
  .cloud2 {
    width: 150px;
    position: absolute;
    top: 0;
    right: -70px;
  }
  .cloud3 {
    width: 120px;
    position: absolute;
    right: -70px;
    bottom: 0;
  }
  .cloud4 {
    width: 120px;
    position: absolute;
    left: -50px;
    bottom: 0;
  }
`;

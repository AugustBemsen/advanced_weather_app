import React, { useContext } from "react";
import styled from "styled-components";
import { BsFillPlayFill } from "react-icons/bs";
import HoldIcon from "../../components/HoldIcon/HoldIcon";
import Card from "../../components/LargeCard/Card";
import Progress from "../../components/Progress/Progress";
import { AppContext } from "../../context/appContext";

const Highlights = () => {
  // Context API
  const [appState] = useContext(AppContext);

  const { active } = appState;

  return (
    <>
      <HighlightsStyles>
        <h3>Today's Highlights</h3>
        <div className="cards">
          <Card
            type="Wind Status"
            value={
              <h2>
                {Math.round(active.wind_speed)}
                <span>mph </span>
              </h2>
            }
            footer={
              <div className="view">
                <HoldIcon icon={<BsFillPlayFill />} /> <p> views </p>
              </div>
            }
          />
          <Card
            type="humidity"
            value={
              <h2>
                {active.humidity} <span> &#37; </span>
              </h2>
            }
            footer={<Progress value={active.humidity} />}
          />
          <Card
            type="Visibility"
            value={
              <h2>
                {Math.round(active.visibility)} <span> miles </span>
              </h2>
            }
          />
          <Card
            type="Air pressure"
            value={
              <h2>
                {active.air_pressure} <span> mb </span>
              </h2>
            }
          />
        </div>
      </HighlightsStyles>
    </>
  );
};

export default Highlights;
const HighlightsStyles = styled.div`
  width: 100%;
  margin-top: 7%;

  .cards {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    grid-gap: 2rem;
    grid-auto-flow: dense;
    column-count: 2;
  }

  .view {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 0.8rem;
      margin-bottom: 0;
      margin-left: 0.3rem;
    }
  }
`;

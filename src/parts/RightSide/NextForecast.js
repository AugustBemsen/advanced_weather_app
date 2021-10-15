import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../components/SmallCard/Card";
import HoldIcon from "../../components/HoldIcon/HoldIcon";
import { AppContext } from "../../context/appContext";
import moment from "moment";
import imgController from "../../lib/imgController";
import tempController from "../../lib/tempController";

const NextForecast = () => {
  // Context API
  const [appState] = useContext(AppContext);

  const { weather } = appState;

  return (
    <>
      <NextForecastStyles>
        <div className="icon_group">
          <HoldIcon white icon={<p>&#8451;</p>} />
          <HoldIcon icon={<p>&#8457;</p>} />
        </div>

        <div className="cards">
          {weather &&
            weather.map(
              (weather, i) =>
                i > 0 && (
                  <Card
                    highest={tempController(weather.max_temp)}
                    date={
                      moment(weather.applicable_date)
                        .calendar()
                        .split(" ")[0]
                    }
                    lowest={tempController(weather.min_temp)}
                    img={imgController(weather.weather_state_abbr)}
                    key={i}
                  />
                )
            )}
        </div>
      </NextForecastStyles>
    </>
  );
};

export default NextForecast;
const NextForecastStyles = styled.div`
  width: 100%;

  .icon_group {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;

    div {
      margin-left: 0.5rem;
    }
  }

  .cards {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
    grid-gap: 1.5rem;
    grid-auto-flow: dense;
    column-count: 2;

    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    }

    @media screen and (max-width: 789px) {
      grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    }
  }
`;

import React from "react";
import styled from "styled-components";
import Card from "../../components/SmallCard/Card";
import HoldIcon from "../../components/HoldIcon/HoldIcon";
import images from "../../imgs";

const NextForecast = () => {
  const {
    // clear,
    // hail,
    // heavy_cloud,
    heavy_rain,
    // light_cloud,
    // light_rain,
    shower,
    sleet,
    snow,
    thunderstorm,
  } = images;

  const dummy = [
    {
      date: "Tomorrow",
      img: snow,
      highest: "16",
      lowest: "12",
    },
    {
      date: "Tomorrow",
      img: shower,
      highest: "16",
      lowest: "12",
    },
    {
      date: "Tomorrow",
      img: heavy_rain,
      highest: "16",
      lowest: "12",
    },
    {
      date: "Tomorrow",
      img: thunderstorm,
      highest: "16",
      lowest: "12",
    },
    {
      date: "Tomorrow",
      img: sleet,
      highest: "16",
      lowest: "12",
    },
  ];

  return (
    <>
      <NextForecastStyles>
        <div className="icon_group">
          <HoldIcon white icon={<p>&#8451;</p>} />
          <HoldIcon icon={<p>&#8457;</p>} />
        </div>

        <div className="cards">
          {dummy.map((card, i) => (
            <Card
              highest={card.highest}
              date={card.date}
              lowest={card.lowest}
              img={card.img}
              key={i}
            />
          ))}
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

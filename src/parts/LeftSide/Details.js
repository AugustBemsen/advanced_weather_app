import React, { useContext } from "react";
import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { AppContext } from "../../context/appContext";
import moment from "moment";

const Details = () => {
  const [appState] = useContext(AppContext);

  const { active, title } = appState;

  return (
    <>
      <DetailsStyles>
        <h1>
          {Math.round(active.the_temp)}
          <span>&#8451;</span>
        </h1>
        <h3>{active.weather_state_name}</h3>
        <p>{moment(active.applicable_date).calendar().split(" ")[0]} - {moment(active.applicable_date).format('ddd')} {moment(active.applicable_date).format('do MMM')}</p>
        <p>
          <IoLocationSharp /> {title}
        </p>
      </DetailsStyles>
    </>
  );
};

export default Details;
const DetailsStyles = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;

  h1 {
    font-size: 5rem;

    span {
      font-size: 2rem;
      font-weight: 200;
    }
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem 0;
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 0.3rem;
    }
  }
`;

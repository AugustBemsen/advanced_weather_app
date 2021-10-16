import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../context/appContext";

const Card = ({ date, img, highest, lowest, onClick }) => {
  const [appState] = useContext(AppContext);
  const { temp } = appState;

  return (
    <>
      <CardStyles onClick={onClick}>
        <p>{date}</p>
        <img src={img} alt="cloud" />
        <div>
          {temp === "centigrade" ? (
            <>
              <p>{highest} &#8451;</p>
              <p>{lowest} &#8451;</p>
            </>
          ) : (
            <>
              <p>{highest} &#8457;</p>
              <p>{lowest} &#8457;</p>
            </>
          )}
        </div>
      </CardStyles>
    </>
  );
};

export default Card;
const CardStyles = styled.div`
  width: 100%;
  height: 160px;
  background: var(--secondary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 70px;
    height: 70px;
    display: block;
    margin: 0.7rem auto;
    object-fit: contain;
  }

  p {
    font-size: 0.95rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p:nth-child(2) {
      opacity: 0.65;
    }
  }
`;

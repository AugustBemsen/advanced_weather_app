import React from "react";
import styled from "styled-components";
import { IoLocationSharp } from 'react-icons/io5';

const Details = () => {
  return (
    <>
      <DetailsStyles>
        <h1>
          15 <span> &#8451; </span>
        </h1>
        <h3>Shower</h3>
        <p>Today - Fri 5 Jun</p>
        <p>
          <IoLocationSharp /> Abuja
        </p>
      </DetailsStyles>
    </>
  );
};

export default Details;
const DetailsStyles = styled.div``;

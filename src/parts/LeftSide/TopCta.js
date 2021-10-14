import React from "react";
import styled from "styled-components";
import { MdOutlineGpsFixed } from "react-icons/md";

const TopCta = () => {
  return (
    <>
      <TopCtaStyles>
        <button>Search for places</button>
        <div>
          <MdOutlineGpsFixed />
        </div>
      </TopCtaStyles>
    </>
  );
};

export default TopCta;
const TopCtaStyles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  button {
    width: 140px;
    height: 35px;
    background: var(--grey-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid var(--grey-color);
    color: var(--white-color);
    transition: all 0.3s ease-in-out;

    &:hover {
      background: none;
    }
  }

  div {
    background: var(--grey-color);
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

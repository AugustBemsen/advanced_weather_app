import React from "react";
import styled from "styled-components";
import { MdOutlineGpsFixed } from "react-icons/md";
import HoldIcon from "../../components/HoldIcon/HoldIcon";

const TopCta = ({ btnFx }) => {
  return (
    <>
      <TopCtaStyles>
        <button onClick={btnFx}>Search for places</button>
        <HoldIcon icon={<MdOutlineGpsFixed />} />
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

  @media screen and (max-width: 789px) {
    padding: 0 1.3rem;
   }

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
`;

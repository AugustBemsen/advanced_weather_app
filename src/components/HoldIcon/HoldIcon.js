import React from "react";
import styled from "styled-components";

const HoldIcon = ({ icon, white, onClick }) => {
  return (
    <>
      <HoldIconStyles onClick={onClick} white={white}>
        {icon}
      </HoldIconStyles>
    </>
  );
};

export default HoldIcon;
const HoldIconStyles = styled.div`
  background: ${({ white }) =>
    white ? "var(--white-color)" : "var(--grey-color)"};
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ white }) =>
    white ? "var(--secondary-color)" : "var(--white-color)"};

  p {
    font-size: 0.88rem;
  }
`;

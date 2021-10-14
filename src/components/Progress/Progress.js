import React from "react";
import styled from "styled-components";

const Progress = ({ value }) => {
  return (
    <>
      <ProgressStyles value={value}>
        <div className="reader">
          <p>0</p>
          <p>50</p>
          <p>100</p>
        </div>
        <div className="progress">
          <div></div>
        </div>
        <div className="unit">
          <p>&#37;</p>
        </div>
      </ProgressStyles>
    </>
  );
};

export default Progress;
const ProgressStyles = styled.div`
  width: 55%;
  margin: auto;
  .reader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin: 0;
    font-size: 0.7rem;
  }

  .progress {
    width: 100%;
    height: 8px;
    border-radius: 50px;
    background: var(--grey-color);
    margin: 3px 0;
    overflow: hidden;

    div {
      width: ${({ value }) => value ? value : 0 }%;
      height: 100%;
      background: var(--yellow-color);
    }
  }

  .unit {
    display: flex;
    justify-content: flex-end;
  }
`;

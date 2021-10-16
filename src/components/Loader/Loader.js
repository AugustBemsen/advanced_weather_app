import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <>
      <LoaderStyles>
        <div className="loader">Loading...</div>
      </LoaderStyles>
    </>
  );
};

export default Loader;
const LoaderStyles = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 3203203902930;
  background: var(--primary-color);

  .loader {
    width: 250px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Druk, arial, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    color: #8d6f57;
    letter-spacing: 0.2rem;
  }

  .loader::before {
    top: 0;
  }

  .loader::before,
  .loader::after {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: #fff;
    position: absolute;
    animation: loading 0.85s infinite alternate ease-in-out;
  }

  .SlowFade {
    animation: fadeSlow 2s ease;
  }

  @keyframes loading {
    0% {
      left: 0;
      height: 30px;
      width: 15px;
    }

    50% {
      height: 8px;
      width: 40px;
    }

    100% {
      left: 235px;
      height: 30px;
      width: 15px;
    }
  }

  @keyframes fadeSlow {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
`;

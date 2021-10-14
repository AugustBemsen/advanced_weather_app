import React from "react";
import Styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const Drawer = ({ open, close, children }) => {
  return (
    <DrawerStyle>
      <div className={open ? "overlay" : null} onClick={close}></div>

      <div className={open ? "slides show" : "slides"}>
        <span onClick={close}>
          <AiOutlineClose className="close" />
        </span>

        <div className="container">
          <div>{children}</div>
        </div>
      </div>
    </DrawerStyle>
  );
};

export default Drawer;

const DrawerStyle = Styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
    
  .close {
    position: absolute;
    top: 2.5%;
    right: 6.5%;
    color: var(--white-color);
    font-size: 1.5rem;
    cursor: pointer;
  }
  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    z-index: 20;
    @media (max-width: 450px) {
      display: none;
    }
  }
  .slides {
    position: fixed;
    top: 0;
    left: -100%;
    z-index: 25;
    width: 380px;
    height: 100vh;
    background: var(--secondary-color);
    padding: 2rem;
    padding-top: 1.2rem;
    transition: all .3s ease-in-out;
    @media (max-width: 768px) {
      width: 63%;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
    &.show {
      left: 0;
    }
    .container {
      width: 100%;
      height: 100%;
      color: var(--white-color);
      div {
        width: 100%;
      }
    }
    
  }
`;

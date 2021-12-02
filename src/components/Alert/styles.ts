import styled, { keyframes } from "styled-components";
import { setColor } from "../../utils/tokens";

const showAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateX(+4rem);

  }
  99%{
    opacity: 1;
    transform: translateX(0);
  }
`;

interface PropsContainer {
  open?: boolean;
}

export const Container = styled.div<PropsContainer>`
  background-color: #ffff;
  color: black;
  min-width: 344px;
  max-width: 100%;
  max-height: none;
  min-height: auto;
  height: auto;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  gap: 8px;
  div {
    visibility: ${(props) => (props.open ? "hidden" : "visible")};
    display: block;
    width: 80%;
    max-height: 100%;
    gap: 7px;
    padding: 2px;
    p{
      width: 100%;
      margin: 0;
      padding: 0;
    }
    label{
      width: 100%;
      height: 100%;
    }
  }
  &:last-child {
    margin-bottom:2rem;
  }
  svg {
    width: 29px;
    height: 29px;
  }
  &.hidden {
    opacity: 0;
    display: none !important;
    transition: 1s ease-out opacity;
    transition: 2s ease-out display;
  }
  &.visible {
    animation: ${props => showAnimation} .8s ease-in;
    transition: 1s ease-in opacity;
    opacity: 1;
  }
  &.d-none{
  }
  &.info {
    color: #00cfe8;
      //arrumar 
    background:  #ecf8fa;
    svg {
      path {
        fill: #00cfe8;
      }
    }
  }
  &.error {
    color: #ea5455;
    background: #faf1f1;
    svg {
      path {
        fill: #ea5455;
      }
    }
  }
  &.sucess {
    color: #28c76f;
    background: #eef8f7;
    svg {
      path {
        fill: #28c76f;
      }
    }
  }
  &.alert {
    color: #ff9f43;
    background: #fbf5f0;
    svg {
      path {
        fill: #ff9f43;
      }
    }
  }
  &.primary {
    color: #0b5151;
    background: #d3f0f5;
    svg {
      path {
        fill: #0b5151;
      }
    }
  }
`;

export const Side = styled.section`
  position: fixed;
  top: 0;
  right: 5px;
  height: 100vh;
  z-index: 999999999999999;
  width: 379px;
  gap: 9px;
  display: flex !important;
  flex-direction: column;
  justify-content: start;
  align-items:center;
  overflow-x: auto;
  padding: 2rem 5px 3rem 5px;
`;

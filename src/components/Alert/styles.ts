import styled, { keyframes } from "styled-components";

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
  width: 100%;
  background-color: #ffff;
  color: black;
  min-height: 56px;
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
  div {
    visibility: ${(props) => (props.open ? "hidden" : "visible")};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    gap: 7px;
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
    background: #ecf8fa;
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
  right: 0;
  height: 100vh;
  z-index: 999999999999999;
  width: 25vw;
  padding: 1.8% 2%;
  gap: 9px;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  padding-bottom: 3rem;
`;

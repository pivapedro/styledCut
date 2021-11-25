import styled, {keyframes} from "styled-components";
import { setWidth } from "../../utils/tokens";
import alertIcon from "../../assets/icon/info-circle.svg";
import arrowDown from "../../assets/icon/Arrow-Basic.svg";

const fadeIn = keyframes`
   0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }

`;

export const Container = styled.label`
  width: ${(props) => setWidth(props, "input")};
  color: #737682;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  position: relative;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -ms-appearance: none;
    margin-top: 8px;
    border: 1px solid #d7d8dc;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    color: #737682;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    background-repeat: no-repeat;
    background-image: url(${arrowDown});
    display: flex;
    background-position: right 0.75rem center;
    align-items: center;
    &:focus,
    option:focus {
      outline: 0 !important;
    }
    &:hover,
    > option:hover {
      outline: 0 !important;
    }
    > option:checked {
      background: #d3f0f5 !important;
      color: #22a1a5 !important;
    }
    &::placeholder {
      color: #aaacb4;
    }
    &:focus-visible {
      outline: none !important;
    }
    &:focus {
      transition: 0.5s ease-in-out all;
      border: 1px solid #22a1a5;
      color: #737682 !important;
    }
  }
  &.error {
    color: #ea5455;
    select {
      transition: 0.5s ease-in-out all;
      border: 1px solid #ea5455 !important;
      padding-right: 2.4rem;
    }
    span {
      animation: ${fadeIn} 0.5s ease-in-out;
    }
  }
`;

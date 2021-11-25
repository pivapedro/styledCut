import styled, { keyframes } from "styled-components";
import { setWidth } from "../../utils/tokens";
import alertIcon from "../../assets/icon/info-circle.svg";
import search from "../../assets/icon/Search.svg";
import cardAdd from "../../assets/icon/card-add.svg";
import cardAddError from "../../assets/icon/Money-Card-Error.svg";
import calendar from "../../assets/icon/calendar.svg";
import mastercard from "../../assets/icon/Companies-Card-Master.svg";
import visa from "../../assets/icon/Companies-Card-Visa.svg";
import elo from "../../assets/icon/Companies-Card-Elo.svg";
export interface InputProps {
  md?: Boolean;
  xs?: Boolean;
  sm?: Boolean;
  lg?: Boolean;
  [x: string]: any;
}

const fadeIn = keyframes`
   0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }

`;
export const Container = styled.label<InputProps>`
  width: ${(props) => setWidth(props, "input")};
  color: #737682;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  position: relative;
  input {
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
    background-image: none;
    display: flex;
    background-position: right 0.75rem center;
    align-items: center;
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
  input[type="search"] {
    background-image: url(${search}) !important;
    padding-right: 2.4rem;
  }
  input[type="card"] {
    background-image: url(${cardAdd}) !important;
    padding-right: 2.4rem;
    &.mastercard {
      background-image: url(${mastercard}) !important;
    }
    &.visa {
      background-image: url(${visa}) !important;
    }
    &.elo {
      background-image: url(${elo}) !important;
    }
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  &.error {
    color: #ea5455;
    input {
      transition: 0.5s ease-in-out all;
      border: 1px solid #ea5455 !important;
      background-image: url(${alertIcon}) !important;
      padding-right: 2.4rem;
    }
    input[type="card"] {
      background-image: url(${cardAddError}) !important;
    }
    span {
      animation: ${fadeIn} 0.5s ease-in-out;
    }
  }
  &.password {
    svg {
      position: absolute;
      right: 1rem;
      top: 2.5rem;
      path {
        fill: #323339;
      }
    }
  }
  &.password.error {
    input {
      background-image: none !important;
    }
    svg {
      path {
        fill: #ea5455;
      }
    }
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(${calendar}) no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
  }
`;

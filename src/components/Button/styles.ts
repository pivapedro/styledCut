import styled from "styled-components";
import {
  setWidth,
  setHeight,
  setColor,
  setBorder,
  setFontProps,
} from "../../utils/tokens";
import { StyledComponent } from "styled-components";
export const Container: StyledComponent<
  "button",
  any,
  {},
  never
> = styled.button`
  box-sizing: border-box;
  border-radius: 28px;
  width: ${(props) => setWidth(props, "button")};
  height: ${(props) => setHeight(props, "button")};
  color: ${(props) => setFontProps(props, "button", "color")};
  outline: 0 !important;
  background-color: ${(props) => setColor(props, "button")};
  border: 0px;
  transition: 0.4s ease-in-out all;
  font-weight: 620;
  font-size: ${(props) => setFontProps(props, "button", "size")};
  border: ${props => setBorder(props, "button")};
  &:hover {
    color: ${(props) => setFontProps(props, "button", "color", "hover")};
    background-color: ${(props) => setColor(props, "button", "hover")};
  }
  &:focus {
    color: ${(props) => setFontProps(props, "button", "color", "pressed")};
    background-color: ${(props) => setColor(props, "button", "pressed")};
  }
  &:disabled {
    background-color: ${(props) => setColor(props, "button", "disabled")};
    color: ${(props) => setFontProps(props, "button", "color", "disabled")};
  }
`;

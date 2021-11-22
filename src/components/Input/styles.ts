import styled from 'styled-components';
import { setWidth } from '../../utils/tokens';
export interface InputProps {
    md?: Boolean;
    xs?: Boolean;
    sm?: Boolean;
    lg?: Boolean;
}
export const Container = styled.label<InputProps>`
    width: ${(props) => setWidth(props, 'input')};
    color: #737682;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
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
        display: flex;
        align-items: center;
        &::placeholder {
            color: #aaacb4;
        }
        &:focus-visible {
            outline: none !important;
        }
        &:focus {
            transition: 0.5s ease-in-out all;
            border: 1px solid #aaacb4 !important;
            color: #737682 !important;
        }
    }
`;

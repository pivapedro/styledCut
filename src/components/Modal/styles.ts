import styled, { keyframes } from 'styled-components'

const animationModal = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }

`
const animationModalTransform = keyframes`
    0%{
        transform: translateY(6rem);
    }
    100%{
        transform: translateY(0);
    }
`
interface PropsContainer {
    open: Boolean,
    height?: string,
    width?: string
}

export const Container = styled.div<PropsContainer>`
    &.noClosable{
        & >div >header >div{
            display: none
        }
    }
    
    z-index: 9999999999999999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255,.4);
    animation: ${animationModal} .7s ease-in-out;
    display: ${props => props.open ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;    
    
    @media (max-width: 800px){
        padding: 10px;
    }
    & >div{
        min-width: ${props => props.width || '611px'};
        min-height: ${props => props.height || '434px'};
        background-color: #fff;
        padding: 10px;
        border-radius: 8px;
        animation: ${animationModalTransform} .5s ease-in-out;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        & >header{
            height: 68px;
            border-bottom: 2px solid #F2F3F8;
            display: flex;
            justify-content: space-between;
            align-items: center;
            & >h4{
                line-height: auto !important;
                margin: 0;
                margin-left: 4%;
                font-family: Roboto;
                color: #25406D;
                font-size: 25px;
            }
            & >div {
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;
                cursor: pointer;
                min-height: 100%;
                min-width: 10%;
                padding: .5rem;
                padding-top: 1.2rem;

                & >img{
                    width:15px;
                    height:15px;
                }
            }

        }
        & >div.content{
            
        }
        @media (max-width: 800px){
            width: 100%;
            min-width: 0;
            min-height: 0;
            & >header{
                h4{
                    font-size: 18px;
                }
            }
        }
    }

    > *{
        color: #000
    }   

`
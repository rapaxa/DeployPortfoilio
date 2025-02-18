import styled from "styled-components";
import {SquareProps} from "../../../types/styles/abstract/square.ts";
import {theme} from "../../../styles/theme.ts";

export const Photo = styled.img`
    max-width: 350px;
    max-height: 350px;
    width: 100%;
    
    border-radius: 50%;
    object-fit: cover;
    background: ${({theme}) => theme.gradient.photoGradient};
    padding: 9px;
    z-index: 1;

`

export const PhotoBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 627px;
    max-height: 627px;
    position: relative;
    left: -14px;
    top: 14px;
    @media ${theme.media.mobile} {
      
    }
`

export const Square = styled.div<SquareProps>`
    max-width: 444px;
    width: 100%;
    max-height: 444px;
    height: 100%;
    position: absolute;
    background: transparent;
    transform: rotate(${props => props.$rotation}deg);
    border: 1px solid transparent;
    border-radius: 10px; 
    border-image: ${({theme}) => theme.gradient.squareGradient} 1; 
    box-sizing: border-box;
    filter: blur(2px);
`;

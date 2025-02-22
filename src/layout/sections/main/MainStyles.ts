import styled, {css, keyframes} from "styled-components";
import { SquareProps } from "../../../types/styles/abstract/square.ts";
import { theme } from "../../../styles/theme.ts";
const MainTextWrapper = styled.div`
    margin-top: 2.8125rem; /* 45px -> 2.8125rem */
    margin-bottom: 0.5rem; /* 8px -> 0.5rem */
`;

const MainTitle = styled.h1`
    font-family: "Poppins", sans-serif;
    color: #42446E;
    font-weight: 700;
    font-size: 3.625rem; /* 58px -> 3.625rem */
    line-height: 4.375rem; /* 70px -> 4.375rem */
    letter-spacing: -0.0625rem; /* -1px -> -0.0625rem */
    
`;
const generateKeyframes = () => {
    let keyframesStr = "";

    for (let i = 0; i <= 100; i += 1) { // шаг 10 для оптимизации
        keyframesStr += `
      ${i}% {
        background: linear-gradient(1${i + 100}deg, #e70faa 20%, #00c0fd 90%);
      }
      
    `;
    }

    return keyframesStr;
};
const gradientAnimation = keyframes`${css`${generateKeyframes()}`}`;

const Photo = styled.img`
    max-width: 21.875rem; /* 350px -> 21.875rem */
    max-height: 21.875rem; /* 350px -> 21.875rem */
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    background: ${({ theme }) => theme.gradient.photoGradient};
    padding: 0.5625rem; /* 9px -> 0.5625rem */
    z-index: 1;
    animation: ${gradientAnimation} 2s infinite alternate;
`
 const PhotoBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 39.1875rem; /* 627px -> 39.1875rem */
    max-height: 39.1875rem; /* 627px -> 39.1875rem */
    position: relative;
    left: -0.875rem; /* -14px -> -0.875rem */
    top: 0.875rem; /* 14px -> 0.875rem */
    @media ${theme.media.mobile} {

    }
`
 const Square = styled.div<SquareProps>`
    max-width: 27.75rem; /* 444px -> 27.75rem */
    width: 100%;
    max-height: 27.75rem; /* 444px -> 27.75rem */
    height: 100%;
    position: absolute;
    background: transparent;
    transform: rotate(${props => props.$rotation}deg);
    border: 0.0625rem solid transparent; /* 1px -> 0.0625rem */
    border-radius: 0.625rem; /* 10px -> 0.625rem */
    border-image: ${({ theme }) => theme.gradient.squareGradient} 1;
    box-sizing: border-box;
    filter: blur(0.125rem); /* 2px -> 0.125rem */
`;
export {
    Photo,
    PhotoBorder,
    Square,
    MainTextWrapper,
    MainTitle,
}

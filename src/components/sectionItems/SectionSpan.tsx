import styled from "styled-components";
import {theme} from "../../styles/theme.ts";


export const SectionSpan = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 2rem; /* 32px -> rem */
    line-height: 1.625rem; /* 26px -> rem */
    letter-spacing: 0;
    text-align: center;
    color: #666666;

    @media ${theme.media.mobile} {
        font-size: 1.2rem; /* 32px -> rem */
        text-align: center;
    }
`;


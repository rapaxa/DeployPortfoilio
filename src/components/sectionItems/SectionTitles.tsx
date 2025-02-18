import styled from "styled-components";
import {theme} from "../../styles/theme.ts";
type SectionTitleProps = {
    $fonSize?:string
}
export const SectionTitles = styled.h2<SectionTitleProps>`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 3rem; /* 48px -> rem */
    line-height: 1.625rem; /* 26px -> rem */
    text-align: center;
    color: ${theme.fonts.title.color};
    margin-bottom: 3.0625rem; /* 49px -> rem */

    @media ${theme.media.tablet} {
        text-align: center;
    }

    @media (prefers-color-scheme: dark) {
        color: #D9D9D9;
    }
`;

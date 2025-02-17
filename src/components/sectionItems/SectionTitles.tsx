import styled from "styled-components";
import {theme} from "../../styles/theme.ts";
type SectionTitleProps = {
    $fonSize?:string
}
export const SectionTitles = styled.h2<SectionTitleProps>`
    font-family: "Poppins",sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 26px;
    text-align: center;
    color: ${theme.fonts.title.color};
    margin-bottom: 49px;
    @media ${theme.media.tablet} {
        text-align: center;
    }
    @media (prefers-color-scheme: dark) {
        color: #D9D9D9;
    }
}
`;

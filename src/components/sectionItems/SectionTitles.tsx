import styled from "styled-components";
import {theme} from "../../styles/theme.ts";
type SectionTitleProps = {
    $fonSize?:string
}
export const SectionTitles = styled.h2<SectionTitleProps>`
    font-family: ${theme.fonts.title.family};
    font-size: ${(props) => props.$fonSize || theme.fonts.title.size};
    font-weight: ${theme.fonts.title.weight};
    line-height: ${theme.fonts.title.height};
    text-align: ${theme.fonts.title.align};
    color: ${theme.fonts.title.color};
    padding: 37px 0;
    letter-spacing: ${theme.fonts.title.spacing};
    @media ${theme.media.tablet} {
        text-align: center;
    }
    @media (prefers-color-scheme: dark) {
        color: #D9D9D9;
    }
}
`;

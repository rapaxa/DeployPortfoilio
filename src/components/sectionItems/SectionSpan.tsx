import styled from "styled-components";
import {theme} from "../../styles/theme.ts";


export const SectionSpan = styled.span`
    font-family: "Poppins",sans-serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
    letter-spacing: 0;
    text-align: center;
    color: #666666;
    @media ${theme.media.tablet} {
        text-align: center;
    }

`


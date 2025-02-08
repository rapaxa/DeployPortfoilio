import styled from "styled-components";
import {theme} from "../../styles/theme.ts";

export const SectionTitles = styled.h2`
      font-family: ${theme.fonts.title.family};
      font-size: ${theme.fonts.title.size || '2.625rem'};
      font-weight: ${theme.fonts.title.weight || 700};
      line-height: ${theme.fonts.title.height || '3.25rem'};
      text-align: ${theme.fonts.title.align || 'left'};
      color: ${theme.fonts.title.color};
      margin:  38px 0;
       @media ${theme.media.tablet} {
       text-align: center;
       }
    @media (prefers-color-scheme: light) {
        color: #D9D9D9;
    }
    }
`;

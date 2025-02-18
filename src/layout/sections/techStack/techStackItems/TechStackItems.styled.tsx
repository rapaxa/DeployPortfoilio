import styled from "styled-components";
import {theme} from "../../../../styles/theme.ts";

export const StyledTechStackItems = styled.ul`
    display: grid;
    width: 100%;
    margin-top: 122px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    align-items: center;
    justify-items: center;
    column-gap:105px;
    row-gap:96px;
    padding: 0;
    @media ${theme.media.mobile} {
        gap: 40px;
    }
`
export const StyledTechStackItem = styled.li`
    
`

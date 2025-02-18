import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";

const StyledListItems = styled.ul`
    display: grid;
    justify-items: center;
    margin-top: 6.875rem;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    column-gap: 34px;
    row-gap: 62px;
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));

    }
`;

const StyledListItem = styled.li`
    max-width: 375px;
    width: 100%; // 375px -> 23.4375rem
    max-height: 570px;
    min-height: 520px;
    // 570px -> 35.625rem
    background-color: #FFFFFF;
    border-radius: 1.25rem; // 20px -> 1.25rem
    position: relative;
    @media (prefers-color-scheme: light) {
        background-color: #363636;
        color: #CCCCCC;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 1.25rem 1.25rem 1.25rem 0.625rem rgba(0, 0, 0, 0.2);
        filter: blur(1.25rem);
        z-index: -1;
        border-radius: 1.25rem;
        @media ${theme.media.tablet} {
            display: none
        }

    }
`;
export {
    StyledListItems,
    StyledListItem,
}

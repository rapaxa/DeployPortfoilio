import styled from "styled-components";
import {ContainerPropsType} from "../../types/container.ts";
import {theme} from "../../styles/theme.ts";


export const SectionsWrapper = styled.section<ContainerPropsType>`
    display: flex;
    width: 100%;
    flex-direction: ${(props) => props.direction };
    justify-content: ${(props) => props.$justify};
    flex-wrap: ${(props) => props.wrap || "no-wrap"};
    align-items: ${(props) => props.$alightItems};
    margin-top: 12.5rem; /* 200px -> rem */
    border: red 2px solid;
    @media ${theme.media.mobile} {
        flex-direction: column;
        text-align: center;
        margin-top: 6.25rem; /* 100px -> rem */
        padding: 0 1.25rem; /* 20px -> rem */
        display: flex;
    }
`


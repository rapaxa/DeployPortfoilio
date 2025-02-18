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
    margin-top: 200px;
    @media ${theme.media.mobile} {
        flex-direction: column;
        text-align: center;
        padding: 0 20px;
        display: flex;
    }
`

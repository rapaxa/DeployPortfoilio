import styled from "styled-components";
import {FlexWrapperPropsType} from "../types/styles/flexWrapperStyled.ts";


export const FlexWrapperStyled = styled.div<FlexWrapperPropsType>`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: ${({ $justifyC }) => $justifyC};
    flex-direction: ${({ $flexD }) => $flexD};
    align-items: ${({ $alignI }) => $alignI };
    @media (prefers-color-scheme: dark) {
        color: #A7A7A7;
    }
`;

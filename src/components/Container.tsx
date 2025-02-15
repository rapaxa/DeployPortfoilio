import styled from "styled-components";
import {ContainerPropsType} from "../types/container.ts";

export const Container = styled.div<ContainerPropsType>`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding: 0 2px;
`

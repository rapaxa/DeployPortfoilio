import styled from "styled-components";
import {theme} from "../../styles/theme.ts";

export const SectionSubTitle = styled.h3`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 2.625rem; /* 42px -> rem */
    line-height: 3.25rem; /* 52px -> rem */
    letter-spacing: -0.025rem; /* -0.4px -> rem */
    color: #42446E;

    &:first-of-type {
        margin-bottom: 2.375rem; /* 38px -> rem */
    }

    &:not(:first-of-type) {
        margin: 2.375rem 0; /* 38px -> rem */
    }

    @media ${theme.media.tablet} {
        text-align: center;
    }
`;


import { createGlobalStyle } from "styled-components";
import {theme} from "./theme.ts";

export const GlobalStyles = createGlobalStyle`
    html{
        font-family: "DM Sans", serif;
        font-size: 16px;
    }
   
    * {
        padding: 0;
        margin: 0;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a, a:link, a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul, ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    aside, nav, footer, header, section, main {
        display: block;
    }

    a svg {
        display: block;
    }
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
       
    }
    @media ${theme.media.mobile} {
        html {
            font-size: 10px;
        }
    }

`;

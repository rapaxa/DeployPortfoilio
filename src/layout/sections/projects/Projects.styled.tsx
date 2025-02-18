import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 375px ;// 375px -> 23.4375rem
    max-height: 570px; // 570px -> 35.625rem
    margin: 1.25rem; // 20px -> 1.25rem
    overflow: hidden;
    text-overflow: ellipsis;
   
`;

export const StyledListItems = styled.ul`
    display: grid;
    justify-items: center;
    margin-top: 110px;  
    grid-template-columns: repeat(auto-fit,minmax(375px, 1fr));
    column-gap:34px;
    row-gap:62px;
    @media ${theme.media.mobile} {
        grid-template-columns: repeat(auto-fit,minmax(175px, 1fr));

    }
`;

export const StyledListItemImg = styled.img`
    width: 100%;
    min-height: 260px; // 260px -> 16.25rem
    border-radius: 1.25rem 1.25rem 0 0; // 20px -> 1.25rem
`;

export const StyledListItem = styled.li`
    max-width: 375px ;
    width: 100%;// 375px -> 23.4375rem
    min-height: 570px; // 570px -> 35.625rem
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

export const StyledTitle = styled.h3`
    font-size: 1.75rem; // 28px -> 1.75rem
    font-weight: 500;
`;

export const StyledDescription = styled.p`
    display: block;
    font-size: 1.125rem; // 18px -> 1.125rem
    font-weight: 300;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;

export const StyledNote = styled.span`
    font-size: 1rem; // 16px -> 1rem
    font-weight: 400;
    margin-bottom: 1.25rem; // 20px -> 1.25rem
`;

export const StyledLinks = styled.div`
    display: flex;
`;

export const StyledLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
    color: #FFFFFF;
    margin-left: 1.25rem; // 20px -> 1.25rem
    margin-right: 1.875rem; // 30px -> 1.875rem
   
`;

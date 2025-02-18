import styled from "styled-components";
import {theme} from "../../styles/theme.ts";

const MenuList = styled.ul`
    display: flex;
    gap: 3.563rem;
    list-style: none;
    padding: 0;
    margin: 0;
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const MenuItem = styled.li`
    text-align: center;
    flex-wrap: wrap;

`;

const MenuLink = styled.a`
    text-decoration: none;
    font-size: 1.25rem;
    font-family: "DM Sans", serif;
    font-weight: 500;
    line-height: 1.625rem;
    color: #666666;
    @media (prefers-color-scheme: dark) {
        color: #A7A7A7;
    }

    &:hover {
        color: #333333;
    }
`;
export {
    MenuList,
    MenuLink,
    MenuItem,
}

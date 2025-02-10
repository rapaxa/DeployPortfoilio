import styled from "styled-components";
import {FlexWrapperStyled} from "../FlexWrapper.tsx";
import {Menu} from "./Menu.tsx";
import {theme} from "../../styles/theme.ts";

export const HeaderMenu = () => {
    return (
        <NavBar as={'nav'} $justifyC='space-around' $alignI='center'>
            <Menu/>
        </NavBar>
    );
};

const NavBar = styled(FlexWrapperStyled)`
    padding: 0;
    @media ${theme.media.tablet }{
        display: none;
    }
`;


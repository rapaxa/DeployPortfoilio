import {Menu} from "../../../components/menu/Menu.tsx";
import {SocialList} from "../../../components/menu/SocialList.tsx";
import styled from "styled-components";

export const DesktopMenu = () => {
    return (
        <NavBar>
            <Menu/>
            <SocialList/>
        </NavBar>
    );
};
const NavBar = styled.nav`
    display: flex;
    max-width: 790px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 51px;
`


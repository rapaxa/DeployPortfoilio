import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {HeaderMenu} from "../../components/menu/HeaderMenu.tsx";
import {Container} from "../../components/Container.tsx";
import {SocialList} from "../../components/menu/SocialList.tsx";
import {MobileMenu} from "../../components/menu/mobileMenu/MobileMenu.tsx";

export const Header = () => {
    return (
        <HeaderStyle>
            <Container>
                <Logo/>
                <HeaderMenu/>
                <SocialList/>
                <MobileMenu/>
            </Container>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    margin-top: 41px;
    position: relative;
    width: 100%;
    height: 60px;
    max-height:59px ;
`;


import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "./menu/DesktopMenu.tsx";
import {MobileMenu} from "../../components/menu/mobileMenu/MobileMenu.tsx";
import {FlexWrapperStyled} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";

export const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <FlexWrapperStyled $justifyC={"space-between"} $alignI={"flex-start"}>
                <Logo/>
                <DesktopMenu/>
                <MobileMenu/>
                </FlexWrapperStyled>
            </Container>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    position: fixed;
    top: 40px;
    left: 0;
    z-index: 1000;
    overflow: hidden;
    width: 100%;
    height: 59px;
`;


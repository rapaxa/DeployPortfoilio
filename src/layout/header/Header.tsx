import styled from "styled-components";
import { Logo } from "../../components/logo/Logo.tsx";
import { DesktopMenu } from "./desktopMenu/DesktopMenu.tsx";
import { MobileMenu } from "./mobileMenu/MobileMenu.tsx";
import { FlexWrapperStyled } from "../../components/FlexWrapper.tsx";
import { Container } from "../../components/Container.tsx";
import React from "react";

export const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return (
        <HeaderWrapper>
            <Container>
                <FlexWrapperStyled $justifyC={"space-between"} $alignI={"flex-start"}>
                    <Logo />
                    {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
                </FlexWrapperStyled>
            </Container>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    padding-top: 2.5rem; /* 40px -> 2.5rem */
    z-index: 1000;
    overflow: hidden;
    width: 100%;
    min-height: 3.6875rem; /* 59px -> 3.6875rem */
`;


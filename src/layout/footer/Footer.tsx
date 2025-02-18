import { StyledSpan } from "../../components/StyledSpan.tsx";
import { FlexWrapperStyled } from "../../components/FlexWrapper.tsx";
import { SocialList } from "../../components/menu/SocialList.tsx";
import { Icon } from "../../components/icons/Icon.tsx";
import { Container } from "../../components/Container.tsx";
import { ContactsItems, FooterMenu, FooterText, StyledFooterContactsContainer } from "./Footer.styled.ts";
import { Menu } from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import { theme } from "../../styles/theme.ts";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container direction="column" $justify="space-around">
                <FlexWrapperStyled $flexD={"column"} $alignI={"center"}>
                    <FooterTitle>For any questions please mail me: <StyledSpan>hi@pavanmg.in</StyledSpan></FooterTitle>
                </FlexWrapperStyled>
                <StyledFooterContactsContainer>
                    <a href="">
                        <Icon iconId={"logoFooterSvg"} width={"97"} height={"58"} viewBox={"0 0 97 58"}/>
                    </a>
                    <ContactsItems>
                        <li>+91 12345 09876</li>
                        <li>info@example.com</li>
                        <li><SocialList/></li>
                    </ContactsItems>
                </StyledFooterContactsContainer>
                <FooterMenu>
                    <Menu/>
                    <FooterText>Designed and built by
                        <StyledSpan> Pavan</StyledSpan> MG with
                        <StyledSpan> Love</StyledSpan> &
                        <StyledSpan> Coffee</StyledSpan>
                    </FooterText>
                </FooterMenu>
            </Container>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    margin-top: 11.5rem; /* 184px -> 11.5rem */
`;

const FooterTitle = styled.h2`
    font-family: "DM Sans",sans-serif;
    color: #1E0E62;
    font-weight: 700;
    font-size: 3.625rem; /* 58px -> 3.625rem */
    line-height: 4.75rem; /* 76px -> 4.75rem */
    letter-spacing: -0.0625rem; /* -1px -> -0.0625rem */
    text-align: center;
    @media ${theme.media.mobile} {
        font-size: 1.625rem; /* 26px -> 1.625rem */
    }
`;

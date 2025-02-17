import {StyledSpan} from "../../components/StyledSpan.tsx";
import {FlexWrapperStyled} from "../../components/FlexWrapper.tsx";
import {SocialList} from "../../components/menu/SocialList.tsx";
import {Icon} from "../../components/icons/Icon.tsx";
import {Container} from "../../components/Container.tsx";
import {ContactsItems, FooterMenu, FooterText, StyledFooterContactsContainer, StyledTitle} from "./Footer.styled.ts";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Container direction="column" $justify="space-around">
                <FlexWrapperStyled $justifyC={"center"}>
                    <StyledTitle>For any questions please mail me:<br/>
                        <StyledSpan>hi@pavanmg.in</StyledSpan>
                    </StyledTitle>
                </FlexWrapperStyled>
                <StyledFooterContactsContainer>
                    <a href="">
                        <Icon  iconId={"logoFooterSvg"} width={"97"} height={"58"} viewBox={"0 0 97 58"}/>
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
    margin-top: 156px;
`
//

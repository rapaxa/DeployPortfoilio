import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";
import {StyledSpan} from "../../../components/StyledSpan.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/theme.ts";

export const Contact = () =>{
    return (
        <SectionsWrapper>
            <FlexWrapperStyled $flexD={"column"} $alignI={"center"}>
                <ContactTitle >For any questions please mail me: <StyledSpan>hi@pavanmg.in</StyledSpan></ContactTitle>
            </FlexWrapperStyled>
        </SectionsWrapper>
    )
}
const ContactTitle = styled.h2`
    font-family: "DM Sans",sans-serif;
    color: #1E0E62;
    font-weight: 700;
    font-size: 3.625rem; /* 58px -> 3.625rem */
    line-height: 4.75rem; /* 76px -> 4.75rem */
    letter-spacing: -0.0625rem; /* -1px -> -0.0625rem */
    text-align: center;
    @media ${theme.media.mobile} {
        font-size: 1.625rem; 
       
    }
`;

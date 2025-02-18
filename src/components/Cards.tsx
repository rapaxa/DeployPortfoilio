import {
    Card,
    StyledDescription, StyledLink, StyledLinks,
    StyledListItemImg,
    StyledNote,
    StyledTitle
} from "./sectionItems/CardsStyles.ts";
import {FlexWrapperStyled} from "./FlexWrapper.tsx";
import {Icon} from "./icons/Icon.tsx";
import {projectsDataItemsType} from "../types/listOfItmes.ts";

export const Cards = ({title, img, description}: projectsDataItemsType) => {
    return (
        <>
            <StyledListItemImg src={img} alt=""/>
            <Card>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
                <StyledNote>Tech stack : HTML , JavaScript, SASS, React</StyledNote>
                <FlexWrapperStyled $alignI={"center"}>
                    <StyledLinks>
                        <Icon iconId={"gitSvg"} width={"20"} height={"20"} viewBox={"0 0 30 30"}/>
                        <StyledLink>Live Preview</StyledLink>
                    </StyledLinks>
                    <StyledLinks>
                        <Icon iconId={"gitSvg"} width={"20"} height={"20"} viewBox={"0 0 30 30"}/>
                        <StyledLink>View Code</StyledLink>
                    </StyledLinks>
                </FlexWrapperStyled>
            </Card>
        </>

    )
}

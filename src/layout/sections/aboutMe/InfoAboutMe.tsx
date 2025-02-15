import {WorkExperience} from "./infoAboutMeItems/WorkExperience.tsx";
import {Education} from "./infoAboutMeItems/Education.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";
import {SectionTitles} from "../../../components/sectionItems/SectionTitles.tsx";
import {SectionText} from "../../../components/sectionItems/SectionText.tsx";
import styled from "styled-components";

export const InfoAboutMe = () => {
    return (
            <InfoAboutMeSection>
                <FlexWrapperStyled $flexD={"column"} $justifyC={"space-between"}>
                    <SectionTitles >{"About Me"}</SectionTitles>
                    <TextWrapper>
                        <SectionText>{"The Generator App is an online tool that helps you " +
                            "to export ready-made templates ready to work as your future website" +
                            ". It helps you to combine slides, panels and other components " +
                            "and export it as a set of static files: HTML/CSS/JS."}</SectionText>
                    </TextWrapper>
                    <WorkExperience/>
                    <Education/>
                </FlexWrapperStyled>
            </InfoAboutMeSection>


    )
}
const InfoAboutMeSection = styled.section`
    padding-top: 165px;
`
const TextWrapper = styled.div`
    max-width: 59%;
    
    width: 100%;
`

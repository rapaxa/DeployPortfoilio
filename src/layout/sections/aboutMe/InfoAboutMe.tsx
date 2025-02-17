import {WorkExperience} from "./infoAboutMeItems/WorkExperience.tsx";
import {Education} from "./infoAboutMeItems/Education.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";
import {SectionText} from "../../../components/sectionItems/SectionText.tsx";
import styled from "styled-components";
import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import {SectionSubTitle} from "../../../components/sectionItems/SectionSubTitle.tsx";

export const InfoAboutMe = () => {
    return (
            <SectionsWrapper>
                <FlexWrapperStyled $flexD={"column"} $justifyC={"space-between"}>
                    <SectionSubTitle >About Me</SectionSubTitle>
                    <TextWrapper>
                        <SectionText>{"The Generator App is an online tool that helps you " +
                            "to export ready-made templates ready to work as your future website" +
                            ". It helps you to combine slides, panels and other components " +
                            "and export it as a set of static files: HTML/CSS/JS."}</SectionText>
                    </TextWrapper>
                    <WorkExperience/>
                    <Education/>
                </FlexWrapperStyled>
            </SectionsWrapper>


    )
}

const TextWrapper = styled.div`
    max-width: 59%;
    width: 100%;
`


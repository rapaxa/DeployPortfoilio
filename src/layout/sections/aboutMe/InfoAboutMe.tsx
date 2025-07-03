import {WorkExperience} from "./infoAboutMeItems/WorkExperience.tsx";
import {Education} from "./infoAboutMeItems/Education.tsx";
import {FlexWrapperStyled} from "../../../components/FlexWrapper.tsx";
import {SectionText} from "../../../components/sectionItems/SectionText.tsx";
import styled from "styled-components";
import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import {SectionSubTitle} from "../../../components/sectionItems/SectionSubTitle.tsx";
import {theme} from "../../../styles/theme.ts";

export const InfoAboutMe = () => {
    return (
            <SectionsWrapper id={"about"}>
                <FlexWrapperStyled $flexD={"column"} $justifyC={"space-between"}>
                    <SectionSubTitle >About Me</SectionSubTitle>
                    <TextWrapper>
                        <SectionText>{"I am a 27-year-old aspiring Front-End Developer from Eastern Europe, currently focused on improving my skills in React, TypeScript, and Redux. " +
                            "I am passionate about programming and eager to build clean," +
                            " user-friendly web applications.           " +
                            " In my free time, I enjoy learning English, exploring new technologies, and thinking about starting my own business in Scotland. I am a motivated and curious person, always looking for ways to grow both personally and professionally."
                        }</SectionText>
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
    @media ${theme.media.tablet} {
        max-width: 100%;
        width: 100%;
    }
    @media ${theme.media.mobile} {
        max-width: 100%;
        width: 100%;
    }
`


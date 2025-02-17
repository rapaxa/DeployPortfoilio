import React from "react";
import styled from "styled-components";
import {MainSection} from "../sections/main/MainSection.tsx";
import {InfoAboutMe} from "../sections/aboutMe/InfoAboutMe.tsx";
import {TechStack} from "../sections/techStack/TechStack.tsx";
import {Projects} from "../sections/projects/Projects.tsx";

export const Main: React.FC = () => {
    return (
        <MainStyled>
            <MainSection/>
            <InfoAboutMe/>
            <TechStack/>
            <Projects/>
        </MainStyled>
    );
};
const MainStyled = styled.main`
    margin-top: 320px;
`

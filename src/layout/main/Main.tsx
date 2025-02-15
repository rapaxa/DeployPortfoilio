import React from "react";
import styled from "styled-components";
import {MainSection} from "../sections/main/MainSection.tsx";
import {InfoAboutMe} from "../sections/aboutMe/InfoAboutMe.tsx";

export const Main: React.FC = () => {
    return (
        <MainStyled>
            <MainSection/>
            <InfoAboutMe/>
        </MainStyled>
    );
};
const MainStyled = styled.main`
    padding-top: 320px;
`

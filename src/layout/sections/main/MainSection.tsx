import photo from "../../../assets/images/Photo.webp";
import {StyledSpan} from "../../../components/StyledSpan.tsx";
import {Photo, PhotoBorder, Square} from "./Main.styled.ts";
import React from "react";
import styled from "styled-components";


export const MainSection:React.FC = () => {
    return (
        <MainSectionWrapper>
            <MainTextWrapper>
                <MainTitle >Hi 👋,<br/>My name is<br/>
                    <StyledSpan>Pavlo MG</StyledSpan>
                    <br/>I'm web developer
                </MainTitle>
            </MainTextWrapper>
                <PhotoBorder>
                    <Square $rotation={30}/>
                    <Square $rotation={45}/>
                    <Square $rotation={60}/>
                    <Square $rotation={75}/>
                    <Square $rotation={90}/>
                    <Photo src={photo} alt=""/>
                </PhotoBorder>
        </MainSectionWrapper>
    )
}

const MainSectionWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const MainTextWrapper = styled.div`
    padding-top: 30px;
`
const MainTitle = styled.h1`
    font-family: "Poppins",sans-serif;
    color: #42446E;
    font-weight: 700;
    font-size: 58px;
    line-height: 70px;
    letter-spacing: -1px;

`

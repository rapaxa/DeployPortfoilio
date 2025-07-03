import photo from "../../../assets/images/Photo.webp";
import {StyledSpan} from "../../../components/StyledSpan.tsx";
import {Photo, PhotoBorder, Square,MainTitle,MainTextWrapper} from "./MainStyles.ts";
import React from "react";
import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import Typewriter from 'typewriter-effect';

export const MainSection:React.FC = () => {
    return (
        <SectionsWrapper id = "home" $justify={"space-between"} $alightItems={"center"}>
            <MainTextWrapper>

                <MainTitle  >Hi 👋,<br/>My name is<br/>
                    <StyledSpan>Pavlo Volodchenko</StyledSpan>
                    <Typewriter
                        options={{
                            strings: ['I\'m web developer','...'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed:"natural"
                        }}
                    />
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
        </SectionsWrapper>
    )
}



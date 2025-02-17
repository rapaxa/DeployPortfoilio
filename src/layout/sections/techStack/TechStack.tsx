import {TechStackItems} from "./techStackItems/TechStackItems.tsx";
import {SectionSpan} from "../../../components/sectionItems/SectionSpan.tsx";
import {dataItems} from "./techStackData.ts";
import styled from "styled-components";
import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import {SectionTitles} from "../../../components/sectionItems/SectionTitles.tsx";




export const TechStack = () => {
    return (
        <>
            <SectionsWrapper $justify={"space-between"} direction={"column"}>
                <TitleWrapper>
                    <SectionTitles>My Tech Stack</SectionTitles>
                    <SectionSpan> Technologies I’ve been working with recently</SectionSpan>
                </TitleWrapper>
                <TechStackItems dataItems={dataItems}/>
            </SectionsWrapper>

        </>
    );
};

const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        width: 100%;
        margin-bottom: 49px!important;
        font-family: "Poppins",sans-serif;
        font-weight: 700;
        font-size: 48px;
        line-height: 26px;
        letter-spacing: 0;
        text-align: center;
        color: #42446E;
    }
`


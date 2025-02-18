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

    h3 {
        width: 100%;
        margin-bottom: 3.0625rem !important; /* 49px -> 3.0625rem */
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-size: 3rem; /* 48px -> 3rem */
        line-height: 1.625rem; /* 26px -> 1.625rem */
        letter-spacing: 0;
        text-align: center;
        color: #42446E;
    }
`;


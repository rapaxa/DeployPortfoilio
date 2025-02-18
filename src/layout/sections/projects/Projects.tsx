import {SectionsWrapper} from "../../../components/sectionItems/SectionWrapper.tsx";
import {SectionTitles} from "../../../components/sectionItems/SectionTitles.tsx";
import {SectionSpan} from "../../../components/sectionItems/SectionSpan.tsx";

import {dataItems} from "./projectsData.ts";
import {StyledListItem, StyledListItems} from "./ProjectStyles.ts";
import {Cards} from "../../../components/Cards.tsx";



export const Projects = () => {
    return (
        <SectionsWrapper direction={"column"}>
                <SectionTitles>Projects</SectionTitles>
                <SectionSpan>Things I’ve built so far</SectionSpan>
                <StyledListItems>
                    {dataItems.map((item, index) => (
                        <StyledListItem key={index}>
                            <Cards {...item}/>
                        </StyledListItem>
                    ))}
                </StyledListItems>
        </SectionsWrapper>
    );
};

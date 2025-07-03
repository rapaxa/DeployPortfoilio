import {ListOfItems} from "../../../../components/listOfItems/ListOfItems.tsx";
import {SectionSubTitle} from "../../../../components/sectionItems/SectionSubTitle.tsx";

const jobData = [
    {
        title: "Junior Web Developer",
        company: "PET projects",
        location: "UK",
        dates: "Nov 2024 - present",
        type: "Internship"
    },
    {
        title: "Skilled Operative",
        company: "Associated Sea Foods",
        location: "UK, Scotland, Buckie",
        dates: "Mar 2023 - present",
        type: "Full Time"
    }
];

export const WorkExperience = () => {
    return (
        <>
            <SectionSubTitle>Work Experience</SectionSubTitle>
            <ListOfItems data={jobData}/>
        </>

    )
}


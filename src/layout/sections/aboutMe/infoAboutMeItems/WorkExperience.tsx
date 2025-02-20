import {ListOfItems} from "../../../../components/listOfItems/ListOfItems.tsx";
import {SectionSubTitle} from "../../../../components/sectionItems/SectionSubTitle.tsx";

const jobData = [
    {
        title: "Junior Web Developer",
        company: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        dates: "Sep 2021 - Dec 2021",
        type: "Full Time"
    },
    {
        title: "Web Development Intern",
        company: "IonPixelz Web Solutions",
        location: "Bengaluru",
        dates: "Sep 2021 - Dec 2021",
        type: "Internship"
    },
    {
        title: "SEO / SEM Specialist",
        company: "HAAPS",
        location: "Bengaluru",
        dates: "Sep 2021 - Dec 2021",
        type: "Internship"
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


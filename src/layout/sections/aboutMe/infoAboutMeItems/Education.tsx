import {ListOfItems} from "../../../../components/listOfItems/ListOfItems.tsx";
import {educationData} from "./educationData.ts";
import {SectionSubTitle} from "../../../../components/sectionItems/SectionSubTitle.tsx";


export const Education = () => {
    return (
        <>
            <SectionSubTitle >Education</SectionSubTitle>
            <ListOfItems data={educationData}/>
        </>

    )
}

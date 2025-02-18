import {dataPropsType} from "../../types/listOfItmes.ts";

import {List, Item, Type, Title, ItemWrapper, Details, Dates, JobLocation, JobCompany} from "./ListOfItemsStyles.ts";

export const ListOfItems = ({data}: { data: dataPropsType[] }) => {
    return (
        <List>
            {data.map((job) => (
                <Item key={job.dates}>
                    <ItemWrapper>
                        <Title>{job.title}</Title>
                        <Type type={job.type}>{job.type}</Type>
                    </ItemWrapper>
                    <ItemWrapper>
                        <Details>
                            <JobCompany>{job.company}</JobCompany>
                            <JobLocation>{job.location}</JobLocation>
                        </Details>
                        <Dates>{job.dates}</Dates>
                    </ItemWrapper>
                </Item>
            ))}
        </List>
    );
};


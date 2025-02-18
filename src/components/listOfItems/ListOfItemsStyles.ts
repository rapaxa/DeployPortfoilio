import styled from "styled-components";
import {theme} from "../../styles/theme.ts";
import {JobTypePropsType} from "../../types/listOfItmes.ts";

const JobCompany = styled.span`
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.75rem; /* 12px -> 0.75rem */
    line-height: 1.0625rem; /* 17px -> 1.0625rem */
    letter-spacing: 0.0625rem; /* 1px -> 0.0625rem */
    color: #95a5a6;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
`;

const Item = styled.div`
    height: 4.875rem; /* 78px -> 4.875rem */
    margin-bottom: 1.75rem; /* 28px -> 1.75rem */
    padding: 0 0 0.9375rem 0.125rem; /* 15px -> 0.9375rem, 2px -> 0.125rem */
    border-bottom: 0.0625rem solid #ddd; /* 1px -> 0.0625rem */
    &:last-child {
        margin-bottom: 0;
        padding: 0;
    }
    @media ${theme.media.mobile} {
        height: auto;
    }
`;

const Title = styled.h4`
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem; /* 20px -> 1.25rem */
    font-weight: 400;
    line-height: 1.75rem; /* 28px -> 1.75rem */
    letter-spacing: 0.0625rem; /* 1px -> 0.0625rem */
    color: #666666;
`;

const Details = styled.div`
    width: 46%;
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem; /* 14px -> 0.875rem */
    color: #7f8c8d;
    margin-bottom: 0.3125rem; /* 5px -> 0.3125rem */
    @media ${theme.media.mobile} {
        flex-direction: column;
    }
`;

const Type = styled.span<JobTypePropsType>`
    padding: 0.3125rem 0.625rem; /* 5px -> 0.3125rem, 10px -> 0.625rem */
    background-color: ${(props) => (props.type === "Full Time" ? "#2ecc71" : "#f39c12")};
    color: white;
    border-radius: 0.25rem; /* 4px -> 0.25rem */
    font-weight: bold;
    font-family: "Poppins", sans-serif;
`;

const Dates = styled(JobCompany)`
    display: flex;
    align-self: flex-end;
    @media ${theme.media.mobile} {
        align-self: center;
    }
`;

const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${theme.media.mobile} {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const JobLocation = styled(JobCompany)``;

export {
    Item,
    Title,
    Details,
    Type,
    List,
    JobLocation,
    JobCompany,
    ItemWrapper,
    Dates,

}

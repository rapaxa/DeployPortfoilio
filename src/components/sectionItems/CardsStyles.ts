import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 375px; // 375px -> 23.4375rem
    max-height: 570px;
    margin: 27px 1.35rem;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: space-between;
`;

const StyledTitle = styled.h4`
    font-size: 1.75rem; // 28px -> 1.75rem
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    line-height: 26px;
    margin-bottom: 17px;

`;
const StyledDescription = styled.p`
    display: block;
    font-size: 1.125rem; // 18px -> 1.125rem
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`;
const StyledNote = styled.span`
    font-size: 1rem; // 16px -> 1rem
    font-weight: 400;
    margin-top: 1.25rem;

    margin-bottom: 1.25rem; // 20px -> 1.25rem
`;
const StyledLinks = styled.div`
    display: flex;
`;
const StyledLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
    color: #FFFFFF;
    margin-left: 1.25rem; // 20px -> 1.25rem
    margin-right: 1.875rem; // 30px -> 1.875rem

`;

const StyledListItemImg = styled.img`
    width: 100%;
    min-height: 260px; // 260px -> 16.25rem
    border-radius: 1.25rem 1.25rem 0 0; // 20px -> 1.25rem
`;
export {
    StyledLinks,
    StyledLink,
    StyledListItemImg,
    StyledTitle,
    StyledDescription,
    StyledNote,
    Card
}

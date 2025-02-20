import styled from "styled-components";
import {theme} from "../../styles/theme.ts";


export const ContactsItems = styled.ul`
    display: flex;
    align-items: center;
    gap: 3.875rem;
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
    }
    
`
export const StyledFooterContactsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
    border-bottom: rgba(102, 102, 102, 0.3) 2px solid;
    @media ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
        padding-bottom: 1rem;
        
    }
`
export const FooterMenu = styled.div`
    width: 100%;
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
   @media ${theme.media.mobile} {
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-top: 1rem;
       p{
           margin-top: 1rem;
       }
   }
`

export const FooterText = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.625rem;
    text-align: center;

    @media (prefers-color-scheme: dark) {
        color: #CCCCCC;
    }
    
`



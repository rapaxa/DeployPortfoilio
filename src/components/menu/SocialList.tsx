import {Icon} from "../icons/Icon.tsx";
import styled from "styled-components";
type SocialListProps = {
    display?:string
}
export const SocialList = () => {
    return (
        <SocialListStyled>
            <SocialItem>
                <a href="">
                    <Icon iconId={"gitSvg"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                </a>
            </SocialItem>
            <SocialItem>
                <a href="">
                    <Icon iconId={"linkInSvg"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                </a>
            </SocialItem>
            <SocialItem>
                <a href="">
                    <Icon iconId={"twitterSvg"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                </a>
            </SocialItem>
        </SocialListStyled>

    )
}


const SocialListStyled = styled.ul<SocialListProps>`
    display: ${(props) => props.display || "flex"};
    gap: 1.25rem;
    padding-right: 9px;
    list-style: none;
    margin: 0;
`;

const SocialItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

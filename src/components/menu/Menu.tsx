import {SocialList} from "./SocialList.tsx";
import {MenuLinks} from "./MenuLinks.tsx";
import {FlexWrapperStyled} from "../FlexWrapper.tsx";

export const Menu = () => {
    return (
        <FlexWrapperStyled>
            <MenuLinks />
            <SocialList/>
        </FlexWrapperStyled>
    );
};


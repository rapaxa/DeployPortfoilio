import {Menu} from "../../../components/menu/Menu.tsx";
import {useState} from "react";
import {SocialList} from "../../../components/menu/SocialList.tsx";
import {BurgerButton, MobileMenuPopup, StyledMobileMenu} from "./MobileMenuStyles.ts";

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <StyledMobileMenu>
            <BurgerButton onClick={handleOpen} $isOpen={isOpen}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup $isOpen={isOpen}>
                <Menu/>
                <SocialList/>
            </MobileMenuPopup>

        </StyledMobileMenu>
    );
};


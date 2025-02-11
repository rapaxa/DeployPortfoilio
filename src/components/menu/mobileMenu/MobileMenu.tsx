import styled, {css} from "styled-components";
import {Menu} from "../Menu.tsx";
import {useState} from "react";
import {theme} from "../../../styles/theme.ts";
import {SocialList} from "../SocialList.tsx";

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

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`;
const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(128, 128, 128, 0.62);
    z-index: 20;
    opacity: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transform: translateX(-100%);
    transition: transform 0.5s ease, opacity 0.3s ease;

    ${props => props.$isOpen && css<{ $isOpen: boolean }>`
        transform: translateX(0);
        opacity: 1;

    `}
    ul {
        padding-top: 50%;
        width: 100%;
        height: 50%;

        li {
            width: 100%;
            background-color: black;

            a {
                color: red;
                padding: 10px;
                display: block;
                text-align: center;
            }
        }
    }
`
const BurgerButton = styled.button<{$isOpen: boolean}>`
    position: fixed;
    right: 20px; 
    top: 20px;
    width: 50px;
    height: 50px;
    z-index: 500;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }

    span {
        display: block;
        position: relative;
        width: 36px;
        height: 2px;
        background: #c53a3a;
        transition: background-color 0.3s ease;

        ${props => props.$isOpen && css<{ $isOpen: boolean }>`
            background: rgba(255, 255, 255, 0);
            
        `}
        &::before {
            content: '';
            display: block;
            position: absolute;
            transform: translateY(-10px);
            width: 36px;
            height: 2px;
            background: #c53a3a;
            transition: transform 0.3s ease;

            ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: translateY(0) rotate(45deg);
            `}
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            transform: translateY(10px);
            width: 36px;
            height: 2px;
            background: #c53a3a;
            transition: transform 0.3s ease;

            ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: translateY(0) rotate(-45deg);
            `}
        }
    }

`;

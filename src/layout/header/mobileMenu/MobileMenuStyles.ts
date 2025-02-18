import styled, {css} from "styled-components";

const StyledMobileMenu = styled.nav`
    display: block;

`;
const MobileMenuPopup = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2D3540;
    z-index: 20;
    opacity: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.5s ease, opacity 0.3s ease;

    ${props => props.$isOpen && css<{ $isOpen: boolean }>`
        transform: translateX(0);
        opacity: 1;
    `}
    ul {
        padding-top: 50%;
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;

        li {
            width: 100%;

            a {
                color: #FFFFFF;
                font-size: 20px;

                padding: 0.625rem; /* 10px -> rem */
                display: block;
                text-align: center;
            }
        }
    }
`
const BurgerButton = styled.button<{ $isOpen: boolean }>`
    position: fixed;
    right: 1.25rem; /* 20px -> rem */
    top: 1.25rem; /* 20px -> rem */
    width: 3.125rem; /* 50px -> rem */
    height: 3.125rem; /* 50px -> rem */
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
        width: 2.25rem; /* 36px -> rem */
        height: 0.125rem; /* 2px -> rem */
        background: #c53a3a;
        transition: background-color 0.3s ease;

        ${props => props.$isOpen && css<{ $isOpen: boolean }>`
            background: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            position: absolute;
            transform: translateY(-0.625rem); /* 10px -> rem */
            width: 2.25rem; /* 36px -> rem */
            height: 0.125rem; /* 2px -> rem */
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
            transform: translateY(0.625rem); /* 10px -> rem */
            width: 2.25rem; /* 36px -> rem */
            height: 0.125rem; /* 2px -> rem */
            background: #c53a3a;
            transition: transform 0.3s ease;
            ${props => props.$isOpen && css<{ $isOpen: boolean }>`
                transform: translateY(0) rotate(-45deg);
            `}
        }
    }
`;
export {
    StyledMobileMenu,
    MobileMenuPopup,
    BurgerButton,
}

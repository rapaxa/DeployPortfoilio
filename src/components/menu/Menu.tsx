import {MenuItem,MenuList,MenuLink} from "./MenuStyles.tsx";


export const Menu = () => {
    return (
        <>
            <MenuList>
                <MenuItem>
                    <MenuLink href="">Home</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="">About</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="">Tech Stack</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="">Projects</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink href="">Contact</MenuLink>
                </MenuItem>
            </MenuList>
        </>
    );
};



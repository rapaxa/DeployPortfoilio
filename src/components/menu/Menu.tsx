import {MenuItem, MenuList, MenuLink} from "./MenuStyles.ts";

const items = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "About",
        href: "about",
    },
    {
        title: "Tech Stack",
        href: "tech",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contact",
        href: "contact",
    },
]

export const Menu = () => {

    return (
        <>
            <MenuList>
                {items.map((item, index) => (
                    <MenuItem key={index}>
                        <MenuLink activeClass="active"
                                  offset={-330}
                                  spy={true}
                                  smooth={true}
                                  to={item.href}>{item.title}</MenuLink>
                    </MenuItem>
                ))}
            </MenuList>
        </>
    );
};



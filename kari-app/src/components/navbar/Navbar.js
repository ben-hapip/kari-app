import { Navbar as HotNavBar } from "@mantine/core";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const navItems = [
    { title: "Contact", link: "/contact" },
    { title: "Highlights", link: "/highlights" },
    { title: "Qualifications", link: "/qualifications" },
    { title: "EOG", link: "/eog" },
  ];

  return (
    <HotNavBar
      width={{ base: 269 }}
      style={{ borderRight: "3px solid orange" }}
    >
      <div className="yo">
        {navItems.map((navItem) => {
          return (
            <div className="navItem">
              <NavLink className="navLink" to={navItem.link}>
                <div>{navItem.title}</div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </HotNavBar>
  );
};

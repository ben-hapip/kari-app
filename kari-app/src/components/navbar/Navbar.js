import { Navbar as MattLikesBoys } from "@mantine/core";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <MattLikesBoys width={{ base: 300 }} height={500} p="xs">
      <div>
        <NavLink to="/contact">CONTACT?</NavLink>
        <NavLink to="/highlights">Highlights?</NavLink>
        <NavLink to="/qualifications">Qualifications?</NavLink>
        <NavLink to="/eog">EOG?</NavLink>
      </div>
    </MattLikesBoys>
  );
};

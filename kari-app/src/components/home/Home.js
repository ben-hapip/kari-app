import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <NavLink to="/contact">CONTACT?</NavLink>
      <NavLink to="/highlights">Highlights?</NavLink>
      <NavLink to="/qualifications">Qualifications?</NavLink>
      <NavLink to="/eog">EOG?</NavLink>
    </div>
  );
};

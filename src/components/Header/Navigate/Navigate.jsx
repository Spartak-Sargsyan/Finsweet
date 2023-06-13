import style from "./navigate.module.css";
import { NavLink } from "react-router-dom";
import { RouteCostant } from "../../../constants/routeCostant";
const Navigate = () => {
  return (
    <nav className={style.navBar}>
      <NavLink
        to={RouteCostant.home}
        className={({ isActive }) => {
          return isActive ? style.navigate2 : style.navigate;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={RouteCostant.blog}
        className={({ isActive }) => {
          return isActive ? style.navigate2 : style.navigate;
        }}
      >
        Blog
      </NavLink>
      <NavLink
        to={RouteCostant.aboutUs}
        className={({ isActive }) => {
          return isActive ? style.navigate2 : style.navigate;
        }}
      >
        About Us
      </NavLink>
      <NavLink
        to={RouteCostant.contactUs}
        className={({ isActive }) => {
          return isActive ? style.navigate2 : style.navigate;
        }}
      >
        Contact Us
      </NavLink>
      <NavLink
        to={RouteCostant.subsribe}
        className={({ isActive }) => {
          return isActive ? style.navigate2 : style.navigate;
        }}
      >
        Subscribe
      </NavLink>
    </nav>
  );
};

export default Navigate;

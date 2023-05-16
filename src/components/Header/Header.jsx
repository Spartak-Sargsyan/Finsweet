import { Link, NavLink } from "react-router-dom";
import style from "./header.module.css";

const Header = ({ logo }) => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.content}>
          <Link className={style.logo}>{logo}</Link>
          <nav className={style.navBar}>
            <NavLink className={style.navigate}>Home</NavLink>
            <NavLink className={style.navigate}>Blog</NavLink>
            <NavLink className={style.navigate}>About Us</NavLink>
            <NavLink className={style.navigate}>Contact Us</NavLink>
            <NavLink className={style.navigateS}>Subscribe</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

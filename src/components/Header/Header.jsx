import { Link, NavLink } from "react-router-dom";
import style from "./header.module.css";
import Container from "../Container/Container";

const Header = ({ logo }) => {
  return (
    <header>
      <Container>
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
      </Container>
    </header>
  );
};

export default Header;

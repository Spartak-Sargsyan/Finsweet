import style from "./navigate.module.css";
import { Link } from "react-router-dom";
import { RouteCostant } from "../../../constants/routeCostant";
const Navigate = () => {
  return (
    <nav>
      <Link to={RouteCostant.home} className={style.hrefFoorer}>
        Home
      </Link>
      <Link to={RouteCostant.blog} className={style.hrefFoorer}>
        Blog
      </Link>
      <Link to={RouteCostant.aboutUs} className={style.hrefFoorer}>
        About Us
      </Link>
      <Link to={RouteCostant.contactUs} className={style.hrefFoorer}>
        Contact Us
      </Link>
      <Link to={RouteCostant.privacyPolicy} className={style.hrefFoorer}>
        Privacy Policy
      </Link>
    </nav>
  );
};

export default Navigate;

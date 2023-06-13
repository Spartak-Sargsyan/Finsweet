import { Link } from "react-router-dom";
import style from "./header.module.css";
import Navigate from "./Navigate/Navigate";
import Container from "../Container/Container";
import { RouteCostant } from "../../constants/routeCostant";

const Header = ({ logo }) => {
  return (
    <header>
      <Container>
        <div className={style.content}>
          <Link to={RouteCostant.home} className={style.logo}>
            {logo}
          </Link>
          <Navigate />
        </div>
      </Container>
    </header>
  );
};

export default Header;

import { useEffect, useState } from "react";
import { cotagoryGet } from "../../services/database";
import Container from "../Container/Container";
import style from "./catagory.module.css";
import { Link } from "react-router-dom";
import { RouteCostant } from "../../constants/routeCostant";

const Catagory = ({ heading }) => {
  const [cotagory, setCotagory] = useState([]);
  useEffect(() => {
    cotagoryGet().then((res) => setCotagory(res));
  }, []);

  return (
    <Container>
      <div style={{ marginTop: 128 }}>
        <h2 className={style.chooseHeading}>{heading}</h2>
        <div className={style.catagory}>
          {cotagory.map((item) => {
            return (
              <div key={item.id} className={style.miniCatagory}>
                <img className={style.img} src={item.logo} alt="error" />
                <div>
                  <Link
                    to={RouteCostant.catagory}
                    className={style.miniHeading}
                  >
                    {item.heading}
                  </Link>
                </div>
                <p className={style.cotagoryDesc}>{item.description}</p>
                <p className={style.cotagoryDesc}>{item.description2}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Catagory;

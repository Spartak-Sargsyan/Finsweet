import { useEffect, useState } from "react";
import { cotagoryGet } from "../../services/database";
import Container from "../Container/Container";
import style from "./catagory.module.css";
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
                <h3 className={style.miniHeading}>{item.heading}</h3>
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

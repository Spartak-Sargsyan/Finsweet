import style from "./homeSectionFive.module.css";
import Container from "../../Container/Container";
import logoipsum1 from "../../../assets/images/homePage/we2.png";
import logoipsum2 from "../../../assets/images/homePage/w3.png";
import logoipsum3 from "../../../assets/images/homePage/we4.png";
import logoipsum4 from "../../../assets/images/homePage/w5.png";
import logoipsum5 from "../../../assets/images/homePage/w6.png";

const HomeSectionFive = () => {
  return (
    <Container>
      <div className={style.logoipsum}>
        <p className={style.logoipsumPar}>
          <span className={style.logoipsumParSpan}>We are</span>
          <br />
          Featured in
        </p>
        <div className={style.logoipsumImg}>
          <img src={logoipsum1} alt="" />
          <img src={logoipsum2} alt="" />
          <img src={logoipsum3} alt="" />
          <img src={logoipsum4} alt="" />
          <img src={logoipsum5} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default HomeSectionFive;

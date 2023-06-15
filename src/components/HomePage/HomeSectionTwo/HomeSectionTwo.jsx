import { Link } from "react-router-dom";
import Container from "../../Container/Container";
import style from "./homeSectionTwo.module.css";

const HomeSectionTwo = () => {
  return (
    <div style={{ marginTop: "128px" }}>
      <Container>
        <div className={style.colorBigDiv}>
          <div className={style.colorDivOne}></div>
          <div className={style.colorDivTwo}></div>
        </div>
        <div className={style.colorDivContent}>
          <div>
            <p className={style.bigPar}>ABOUT US</p>
            <h2 className={style.bigHeading}>
              We are a community of <br /> content writers who share their{" "}
              <br /> learnings
            </h2>
            <p className={style.miniPar}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link className={style.button}>Read Me</Link>
          </div>
          <div>
            <p className={style.bigPar}>OUR MISION</p>
            <h3 className={style.miniHeading}>
              Creating valuable content for <br /> creatives all around the
              world
            </h3>
            <p className={style.miniPar}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
              <br />
              enim ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
              <br />
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeSectionTwo;

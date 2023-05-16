import Button from "../../Button/Button";
import Container from "../../Container/Container";
import style from "./homeSectionOne.module.css";
import home2 from "../../../assets/images/homePage/home2.png";
const HomeSectionOne = () => {
  return (
    <>
      <div className={style.homeOne}>
        <Container>
          <div className={style.content}>
            <p className={style.oneHomePar}>Posted on startup</p>
            <h1 className={style.bigHomeHeading}>
              Step-by-step guide to choosing <br />
              great font pairs
            </h1>
            <p className={style.twoHomePar}>
              By <span style={{ color: "#FFD050" }}> James West </span> | May
              23, 2022
            </p>
            <p className={style.threeHomePar}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident.
            </p>
            <Button>Read More</Button>
          </div>
        </Container>
      </div>

      <div className={style.twoHome}>
        <Container>
          <div className={style.twoHomeContent}>
            <div className={style.twoHomeOneDiv}>
              <h2 className={style.twoHomeHead}>Featured Post</h2>
              <div className={style.twoHomeImgDiv}>
                <img className={style.twoHomeImg} src={home2} alt="home 2" />
              </div>
              <p className={style.twoHomeOnePar}>
                By <span className={style.twoHomeSpan}>John Doe</span> l May 23,
                2022
              </p>
              <h3 className={style.twoHomeThreeHead}>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
                sed do eiusmod tempor.
              </h3>
              <p className={style.twoHomeTwoPar}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore <br /> eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident.
              </p>
              <Button>Read More</Button>
            </div>
            <div className={style.twoHomeOneDiv}></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeSectionOne;

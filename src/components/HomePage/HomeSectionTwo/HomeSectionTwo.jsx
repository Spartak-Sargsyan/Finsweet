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

        {/* <div className={style.aboutPage}>
          <div className={style.aboutPageDiv}>
            <p className={style.aboutPageP}>ABOUT US</p>
            <h1 className={style.aboutPageH1}>
              We are a team of <br /> content writers who <br /> share their
              learnings
            </h1>
          </div>
          <p className={style.aboutPageP2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            <br />
            enim ad minim veniam, quis nostrud exercitation ullamco <br />
            laboris nisi utaliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={style.aboutPage2}>
          <div className={style.aboutPage2Content}>
            <div className={style.aboutPage2Content2}>
              <div className={style.aboutPage2MiniContent}>
                <p className={style.aboutPage2ContentP1}>12+</p>
                <p className={style.aboutPage2ContentP2}>Blogs Published</p>
              </div>
              <div className={style.aboutPage2MiniContent}>
                <p className={style.aboutPage2ContentP1}>18K+</p>
                <p className={style.aboutPage2ContentP2}>Views on Finsweet</p>
              </div>
              <div className={style.aboutPage2MiniContent}>
                <p className={style.aboutPage2ContentP1}>30K+</p>
                <p className={style.aboutPage2ContentP2}>Total active Users</p>
              </div>
            </div>
          </div>
          <div className={style.purple}></div>
          <div className={style.yellow}></div>
        </div> */}
      </Container>
    </div>
  );
};

export default HomeSectionTwo;

import style from "./homeSectionSix.module.css";
import Container from "../../Container/Container";
import user from "../../../assets/images/homePage/user5.png";
import { Icon } from "../../../constants/Icon";

const HomeSectionSix = () => {
  return (
    <Container>
      <div className={style.sectionSix}>
        <div className={style.sectionSixLeft}>
          <p className={style.sectionSixLeftPar}>TESTIMONIALS</p>
          <h2 className={style.sectionSixLeftHead}>
            What people say <br /> about our blog
          </h2>
          <p className={style.sectionSixLeftDesc}>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className={style.sectionSixRight}>
          <p className={style.sectionSixRightDesc}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua.
          </p>
          <div className={style.sectionSixRightUser}>
            <div className={style.sectionSixRightUserDesc}>
              <img src={user} alt="user" />
              <div style={{ marginLeft: "16px" }}>
                <p className={style.sectionSixRightUserDescName}>
                  Jonathan Vallem
                </p>
                <span className={style.sectionSixRightUserDescCity}>
                  New york, USA
                </span>
              </div>
            </div>
            <div className={style.arrow}>
              <span className={style.arrowS}>{Icon.arrowLeft}</span>
              <span className={style.arrowS}>{Icon.arrowRigh}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeSectionSix;

import Button from "../../Button/Button";
import style from "./homeSectionThree.module.css";
import Container from "../../Container/Container";
const HomeSectionThree = () => {
  return (
    <Container>
      <div className={style.section3}>
        <div className={style.section3Mini}>
          <p className={style.section3MiniPar}>Why we started</p>
          <h2 className={style.section3MiniHead}>
            It started out as a simple <br /> idea and evolved into <br /> our
            passion
          </h2>
          <p className={style.section3MiniPar2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip.
          </p>
          <Button>Discover our story</Button>
        </div>
      </div>
    </Container>
  );
};

export default HomeSectionThree;

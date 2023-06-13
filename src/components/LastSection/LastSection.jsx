import Container from "../Container/Container";
import Button from "../Button/Button";
import style from "./lastSection.module.css";

const LastSection = () => {
  return (
    <Container>
      <div style={{ marginTop: "128px", marginBottom: "128px" }}>
        <h2 className={style.sectionSevenHead}>
          Join our team to be a part <br />
          of our story
        </h2>
        <p className={style.sectionSevenPar}>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div style={{ textAlign: "center" }}>
          <Button>Join Now</Button>
        </div>
      </div>
    </Container>
  );
};

export default LastSection;
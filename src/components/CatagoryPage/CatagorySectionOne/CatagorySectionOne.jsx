import style from "./catagorySectionOne.module.css";
import Container from "../../Container/Container";
import { Icon } from "../../../constants/Icon";

const CatagorySectionOne = () => {
  return (
    <Container>
      <div className={style.main}>
        <h1>Business</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore.
        </p>
        <p>Blog {Icon.angleRigth} Business</p>
      </div>
    </Container>
  );
};

export default CatagorySectionOne;

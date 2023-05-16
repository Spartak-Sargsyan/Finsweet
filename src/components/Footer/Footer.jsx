import { Link } from "react-router-dom";
import style from "./footer.module.css";
import facebook from "../../assets/icon/socialIcon/facebook.svg";
import instagram from "../../assets/icon/socialIcon/instagram.svg";
import linkedIn from "../../assets/icon/socialIcon/linkedIn.svg";
import twitter from "../../assets/icon/socialIcon/twitter.svg";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { useForm } from "react-hook-form";
import { ErrorMessigInput } from "../../constants/formMessage";

const Footer = ({ logo }) => {
  const {
    register,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: "onChange",
  });

  const isSubmitDisable = !isDirty && !isValid;

  return (
    <footer>
      <Container>
        <div className={style.contentFooter}>
          <p className={style.logoFooter}>{logo}</p>
          <nav>
            <Link className={style.hrefFoorer}>Home</Link>
            <Link className={style.hrefFoorer}>Blog</Link>
            <Link className={style.hrefFoorer}>About Us</Link>
            <Link className={style.hrefFoorer}>Contact Us</Link>
            <Link className={style.hrefFoorer}>Privacy Policy</Link>
          </nav>
        </div>

        <div className={style.contentFooter2}>
          <h2 className={style.footerHeadig}>
            Subscribe to our news letter to get <br /> latest updates and news
          </h2>

          <form className={style.inputs}>
            <div>{errors?.email && <p>{ErrorMessigInput.errorMail}</p>}</div>
            <input
              {...register("email", {
                pattern: {
                  value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: ErrorMessigInput.errorMail,
                },
              })}
              className={style.inputFooter}
              type="text"
              placeholder="Enter Your Email"
            />
            <Button disabled={isSubmitDisable}>Subscribe</Button>
          </form>
        </div>

        <div className={style.downFooter}>
          <div className={style.contactsFooter}>
            <p className={style.footerPar}>Finstreet 118 2561 Fintown</p>
            <p className={style.footerPar}>Hello@finsweet.com 020 7993 2905</p>
          </div>

          <div className={style.social}>
            <img className={style.socialImg} src={facebook} alt="" />
            <img className={style.socialImg} src={instagram} alt="" />
            <img className={style.socialImg} src={linkedIn} alt="" />
            <img className={style.socialImg} src={twitter} alt="" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

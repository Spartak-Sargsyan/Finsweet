import { Link } from "react-router-dom";
import style from "./footer.module.css";
import facebook from "../../assets/icon/socialIcon/facebook.svg";
import instagram from "../../assets/icon/socialIcon/instagram.svg";
import linkedIn from "../../assets/icon/socialIcon/linkedIn.png";
import twitter from "../../assets/icon/socialIcon/twitter.svg";
const Footer = ({ logo }) => {
  return (
    <footer>
      <div className={style.container}>
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
          <div className={style.inputs}>
            <input
              className={style.inputFooter}
              type="text"
              placeholder="Enter Your Email"
            />
            <button class={style.butSub}>Subscribe</button>
          </div>
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
      </div>
    </footer>
  );
};

export default Footer;

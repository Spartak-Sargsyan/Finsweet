import user from "../../../assets/images/repeatImages/user5.png";
import style from "./blogPostSectionOne.module.css";

const BlogPostSectionOne = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.main1}>
          <img src={user} alt="" />
          <div style={{ marginLeft: 16 }}>
            <p className={style.main1Par}>Andrew Jonson</p>
            <span className={style.main1Span}>Posted on 27th January 2022</span>
          </div>
        </div>
        <p className={style.par}>
          Step-by-step guide to choosing great font pairs
        </p>
        <div>
          <img src="https://i.ibb.co/LkQFTRW/Startup.png" alt="" />
          <span className={style.main2Span}>Startup</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSectionOne;

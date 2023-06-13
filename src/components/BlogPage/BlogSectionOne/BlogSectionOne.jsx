import React from "react";
import Button from "../../Button/Button";
import style from "./blogSectionOne.module.css";
import Container from "../../Container/Container";
import blogImg from "../../../assets/images/blogPage/blog1.png";
import { Icon } from "../../../constants/Icon";

const BlogSectionOne = () => {
  return (
    <Container>
      <div className={style.main}>
        <div className={style.content}>
          <p className={style.contentPar}>Featured Post</p>
          <h2 className={style.contentHead}>
            Step-by-step guide to choosing great <br /> font pairs
          </h2>
          <p className={style.contentPar2}>
            By <span>John Doe</span> | May 23, 2022
          </p>
          <p className={style.contentPar3}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint
            occaecat cupidatat non proident.
          </p>
          <Button>Read Me {Icon.greater}</Button>
        </div>
        <div className={style.imgContent}>
          <img src={blogImg} alt="blog" />
        </div>
      </div>
    </Container>
  );
};

export default BlogSectionOne;

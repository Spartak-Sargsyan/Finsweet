import { useState, useEffect } from "react";
import Container from "../../Container/Container";
import style from "./blogPostSectionThree.module.css";
import { blogPagePostGet } from "../../../services/database";

const BlogPostSectionThree = () => {
  const [blogPost, setBlogPost] = useState([]);
  useEffect(() => {
    blogPagePostGet().then((res) => setBlogPost(res));
  }, []);

  return (
    <Container>
      <div className={style.main}>
        <p className={style.mainPar}>What to read next</p>
        <div className={style.mainContent}>
          {blogPost.map((item) => {
            return (
              <div key={item.id} className={style.miniMainContent}>
                <div>
                  <img width="405px" src={item.img} alt="" />
                </div>
                <p>{item.miniDesc}</p>
                <h3>{item.heading}</h3>
                <h3>{item.heading2}</h3>
                <h3>{item.heading3}</h3>
                <p>{item.description}</p>
                <p>{item.description2}</p>
                <p>{item.description3}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default BlogPostSectionThree;

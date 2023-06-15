import style from "./blogSectionTwo.module.css";
import Container from "../../Container/Container";
import { useEffect, useState } from "react";
import { blogPageGet } from "../../../services/database";
import { Icon } from "../../../constants/Icon";
import { Link } from "react-router-dom";
import { RouteCostant } from "../../../constants/routeCostant";

const BlogSectionTwo = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    blogPageGet()
      .then((res) => setBlog(res))
      .catch((errors) => console.error(errors));
  }, []);

  return (
    <Container>
      <div style={{ marginTop: 65 }} className={style.main}>
        <h1 className={style.mainHead}>All posts</h1>
        <div className={style.loopMain}>
          {blog.map((item) => {
            return (
              <div key={item.id} className={style.miniMain}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div className={style.miniMainContent}>
                  <p>{item.cotegory}</p>
                  <h2>{item.heading}</h2>
                  <h2 style={{ paddingBottom: 16 }}>{item.heading2}</h2>
                  <p>{item.description}</p>
                  <p>{item.description2}</p>
                </div>
              </div>
            );
          })}
          <div className={style.button}>
            <Link to={RouteCostant.blogPost} className={style.href}>
              {Icon.angleLeft}
              Prev
            </Link>
            <Link to={RouteCostant.blogPost} className={style.href}>
              Next
              {Icon.angleRigth}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogSectionTwo;

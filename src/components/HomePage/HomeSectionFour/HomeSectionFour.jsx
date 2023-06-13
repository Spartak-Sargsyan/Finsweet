import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeAuthorGet } from "../../../services/database";
import Container from "../../Container/Container";
import style from "./homeSectionFour.module.css";

const HomeSectionFour = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    homeAuthorGet().then((res) => setAuthor(res));
  }, []);

  return (
    <Container>
      <div style={{ marginTop: 128 }}>
        <h2 className={style.authorHead}>List of Authors</h2>
        <div className={style.miniAuthor}>
          {author.map((item) => {
            return (
              <div key={item.id} className={style.authors}>
                <img src={item.img} alt="user" />
                <h3 className={style.authorHead3}>{item.name}</h3>
                <span className={style.authorDesc}>{item.company}</span>
                <div className={style.socialMedia}>
                  <Link>
                    <img src={item.facebook} alt="facebook" />
                  </Link>
                  <Link>
                    <img src={item.twitter} alt="twitter" />
                  </Link>
                  <Link>
                    <img src={item.instagram} alt="instagram" />
                  </Link>
                  <Link>
                    <img src={item.linkedIn} alt="linkedIn" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default HomeSectionFour;

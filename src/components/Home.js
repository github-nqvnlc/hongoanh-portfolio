import parse from "html-react-parser";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useLocalizedData } from "../hooks/useLocalizedData";

const Home = ({ dark }) => {
  const { t } = useLanguage();
  const { data, loading, error } = useLocalizedData("info");

  return (
    <div className="hongoanh_tm_section" id="home">
      <div className="hongoanh_tm_hero">
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
          // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{t("hero.hello")}</h3>
              </div>
              <div className="name">
                <h3>{data && data.name ? data.name : "name"}</h3>
              </div>
              <div className="job">
                <p>
                  {t("hero.a")} <span className="greenText">{data && data.mainSkill}</span>{" "}
                  {t("hero.from")} <span className="purpleText">{data && data.address}</span>
                </p>
              </div>
              <div className="text">
                <p>{data && data.bio}</p>
              </div>
              <div className="button">
                <div className="hongoanh_tm_button">
                  <a className="anchor" href="#about">
                    <span>{t("nav.about")}</span>
                  </a>
                </div>
                <div className="social">
                  <ul>
                      {data &&
                       data.social &&
                       data.social.length > 0 &&
                       data.social.map((social, i) => (
                        <li key={i}>
                          <a href={social.url} target="_blank" rel="noopener noreferrer">
                            {parse(social.icon)}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <Image
                  src={data && data.img ? data.img : "https://lxbsypbe5na5ujep.public.blob.vercel-storage.com/hongoanh-portfolio/slider/avatar.png"}
                  alt="image"
                  width={600}
                  height={750}
                />
                   {data &&
                   data.skills &&
                   data.skills.length > 0 &&
                   data.skills.map(
                    (skill, i) =>
                      skill.icon && (
                        <span
                          key={i}
                          className={`skills ${skill.name} anim_moveBottom`}
                        >
                          {parse(skill.icon)}
                        </span>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="hongoanh_tm_down">
          <a className="anchor" href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;

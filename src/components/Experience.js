import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useLocalizedData } from "../hooks/useLocalizedData";

const Experience = ({ dark }) => {
  const { t } = useLanguage();
  const { data, loading, error } = useLocalizedData("experience");

  return (
    <div className="hongoanh_tm_section" id="experience">
      <div className="hongoanh_tm_experience">
        <div className="container">
          <div className="hongoanh_tm_main_title" data-align="center">
            <span className="wow fadeInUp" data-wow-duration="1s">
              {t("experience.subtitle")}
            </span>
            <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
              {t("experience.title")}
            </h3>
            <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
              {t("experience.description")}
            </p>
          </div>
          <div className="experience_list">
            <div className="wrapper">
              {data &&
                data.map((item, i) => (
                  <div
                    className="list_inner wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={`${i * 0.3}s`}
                    key={item.id}
                  >
                    <div className="time">
                      <span>{item.duration}</span>
                    </div>
                    <div className="content">
                      <div className="position">
                        <h3>{item.position}</h3>
                        <span className="company">{item.company}</span>
                      </div>
                      
                      {/* Công việc đã thực hiện */}
                      {item.responsibilities && item.responsibilities.length > 0 && (
                        <div className="responsibilities">
                          <h4>{t("experience.responsibilities")}</h4>
                          <ul>
                            {item.responsibilities.map((task, index) => (
                              <li key={index}>{task}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Kết quả đạt được */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="achievements">
                          <h4>{t("experience.achievements")}</h4>
                          <ul>
                            {item.achievements.map((achievement, index) => (
                              <li key={index}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Công nghệ/Kỹ năng */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="technologies">
                          <h4>{t("experience.technologies")}</h4>
                          <ul>
                            {item.technologies.map((tech, index) => (
                              <li key={index}>
                                <span>{tech}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src="/img/brushes/about/1.png" alt="image" width={300} height={300} />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <Image src="/img/brushes/about/2.png" alt="image" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
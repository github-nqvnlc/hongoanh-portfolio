import Counter from "./Counter";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchData } from "../utilits";
import { useLanguage } from "../context/LanguageContext";
import { useLocalizedData } from "../hooks/useLocalizedData";

const About = ({ dark }) => {
  const { data, loading, error } = useLocalizedData("about");
  const { t } = useLanguage();

  return (
    <div className="hongoanh_tm_section" id="about">
      <div className="hongoanh_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <Image
                  src={`/img/about/${dark ? 2 : 1}.jpg`}
                  alt="image"
                  width={691}
                  height={681}
                />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={data?.experience} />
                    </h3>
                    <span className="name">
                      {t("about.years_of_experience")
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}
                      <br />
                      {t("about.years_of_experience")
                        .split(" ")
                        .slice(2)
                        .join(" ")}
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      + <Counter end={data?.totalProjectInThousand} />
                    </h3>
                    <span className="name">
                      {t("about.successful_projects")
                        .split(" ")
                        .slice(0, 2)
                        .join(" ")}
                      <br />
                      {t("about.successful_projects")
                        .split(" ")
                        .slice(2)
                        .join(" ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a ${data?.skill}`}</span>
                <h3>{data?.title}</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>{data?.bio}</p>
              </div>
              <div
                className="hongoanh_tm_education wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="education_item">
                  <h4 className="education_title">
                    <span className="education_icon">
                      <Image
                        src={`/img/about/graduation.jpg`}
                        alt="Education Icon"
                        width={150}
                        height={150}
                        style={{
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "3px solid #ff6b9d",
                          boxShadow: "0 4px 8px rgba(255, 107, 157, 0.3)",
                        }}
                      />
                    </span>
                    {t("about.education")}
                  </h4>
                  <div className="education_details">
                    <div className="education_grid">
                      <div className="education_row">
                        <span className="education_dot school"></span>
                        <strong className="education_label">
                          {t("about.school")}:
                        </strong>
                        <span className="education_value">
                          {data?.graduation}
                        </span>
                      </div>
                      <div className="education_row">
                        <span className="education_dot major"></span>
                        <strong className="education_label">
                          {t("about.major")}:
                        </strong>
                        <span className="education_value">
                          {data?.graduationMajor}
                        </span>
                        <span className="education_dot year"></span>

                        <strong className="education_label">
                          {t("about.graduation_year")}:
                        </strong>
                        <span className="education_value">
                          {data?.graduationYear}
                        </span>
                      </div>
                    </div>
                  </div>
                  {data?.graduationDescription && (
                    <div className="education_description">
                      <p>&ldquo;{data?.graduationDescription}&rdquo;</p>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="hongoanh_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>{t("about.contact_now")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image
            src="/img/brushes/about/1.png"
            alt="image"
            width={300}
            height={300}
          />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <Image
            src="/img/brushes/about/2.png"
            alt="image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
export default About;

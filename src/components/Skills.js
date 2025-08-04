import { useEffect, useState } from "react";
import Image from "next/image";
import { activeSkillProgress, fetchData } from "../utilits";

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    async function loadData() {
      const result = await fetchData("/static/info.json");
      setData(result);
    }
    loadData();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="hongoanh_tm_section">
      <div className="hongoanh_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="hongoanh_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Design is Life</span>
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                <p>
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {data &&
                  data.skills &&
                  data.skills.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.value}
                      data-color={skill.color}
                      key={i}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.value}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="right">
              <Image src={`https://lxbsypbe5na5ujep.public.blob.vercel-storage.com/hongoanh-portfolio/skills/${dark ? 2 : 1}.jpg`} alt="image" width={531} height={801} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import ToggleGroup from "../components/ToggleGroup";

const MobileMenu = ({ logo }) => {
  const [toggle, setToggle] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="hongoanh_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <a href="#">
              <Image src={logo ? logo : "/img/logo/logo.png"} alt="image" width={150} height={50} />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home" onClick={() => setToggle(false)}>
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#about">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#experience">
                {t("nav.experience")}
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#portfolio">
                {t("nav.portfolio")}
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#service">
                {t("nav.service")}
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#blog">
                {t("nav.blog")}
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#contact">
                {t("nav.contact")}
              </a>
            </li>
            <li className="toggle_group_container">
              <ToggleGroup />
            </li>
            <li className="download_cv">
              <a href="/img/cv/1.jpg" download="Hong_Oanh_CV.jpg">
                <span>{t("hero.download_cv")}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;

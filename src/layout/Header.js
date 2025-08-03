import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import ToggleGroup from "../components/ToggleGroup";

const Header = ({ logo }) => {
  const { t } = useLanguage();

  return (
    <div className="hongoanh_tm_header">
      <div className="container">
        <div className="inner">
          <div className="logo">
            <a href="#">
              {logo && (
                <Image src={logo ? logo : "/img/logo/logo.png"} alt="image" width={247} height={72} />
              )}
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">{t("nav.home")}</a>
              </li>
              <li>
                <a href="#about">{t("nav.about")}</a>
              </li>
              <li>
                <a href="#experience">{t("nav.experience")}</a>
              </li>
              <li>
                <a href="#portfolio">{t("nav.portfolio")}</a>
              </li>
              <li>
                <a href="#service">{t("nav.service")}</a>
              </li>
              <li>
                <a href="#blog">{t("nav.blog")}</a>
              </li>
              <li>
                <a href="#contact">{t("nav.contact")}</a>
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
    </div>
  );
};
export default Header;

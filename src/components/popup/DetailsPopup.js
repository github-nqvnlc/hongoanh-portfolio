// import Image from "next/image"; // Using regular img tags for static assets
/* eslint-disable @next/next/no-img-element */
import { useLanguage } from "../../context/LanguageContext";

const DetailsPopup = ({ open, close, data }) => {
  const { language } = useLanguage();
  if (!data) return null;
  
  return (
    <div className={`hongoanh_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
                  <div className="close">
            <a 
              href="#portfolio" 
              onClick={(e) => {
                close();
                // Smooth scroll to portfolio section
                setTimeout(() => {
                  const portfolioSection = document.getElementById('portfolio');
                  if (portfolioSection) {
                    portfolioSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }, 100);
              }}
            >
              <i className="icon-cancel" />
            </a>
          </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img 
                src={data.thumb || "/img/thumbs/4-2.jpg"} 
                alt={data.title || "Portfolio item"} 
              />
              <div
                className="main"
                data-img-url={data.img || data.thumb}
                style={{ backgroundImage: `url("${data.img || data.thumb}")` }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{data.title.toUpperCase()}</h3>
              <h6>{data.role}</h6>
              <span>
                <a href="#">{data.labelCategory} - {data.date}</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>{data.description}</p>
                {data.details && data.details.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))}
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">{language === 'en' ? 'Category' : 'Danh Mục'}</span>
                    <span>
                      <a href="#">{data.labelCategory}</a>
                    </span>
                  </li>
                  {data.technologies && (
                    <li>
                      <span className="first">{language === 'en' ? 'Technologies' : 'Công Nghệ'}</span>
                      <span>{data.technologies.join(', ')}</span>
                    </li>
                  )}
                  <li>
                    <span className="first">{language === 'en' ? 'Type' : 'Loại'}</span>
                    <span>{data.type.charAt(0).toUpperCase() + data.type.slice(1)}</span>
                  </li>
                  {data.link && data.link !== "#" && (
                    <li>
                      <span className="first">{language === 'en' ? 'Project Link' : 'Link Dự Án'}</span>
                      <span>
                        <a 
                          href={data.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                          style={{
                            color: '#ff709e',
                            textDecoration: 'underline',
                            textDecorationColor: '#ff709e',
                            textUnderlineOffset: '4px',
                            textDecorationThickness: '2px',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#e55a87';
                            e.target.style.textDecorationColor = '#e55a87';
                            e.target.style.textUnderlineOffset = '6px';
                            e.target.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = '#ff709e';
                            e.target.style.textDecorationColor = '#ff709e';
                            e.target.style.textUnderlineOffset = '4px';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          {language === 'en' ? 'View Project' : 'Xem Dự Án'}
                        </a>
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {data.gallery && data.gallery.length > 0 && (
              <div className="additional_images">
                <ul>
                  {data.gallery.map((image, index) => (
                    <li key={index}>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src={image} alt="image" />
                          <div
                            className="main"
                            data-img-url={image}
                            style={{
                              backgroundImage: `url("${image}")`,
                            }}
                          />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;

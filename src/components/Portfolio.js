import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import { useLocalizedData } from "../hooks/useLocalizedData";
import { useLanguage } from "../context/LanguageContext";

/* eslint-disable @next/next/no-img-element */

const Portfolio = () => {
  const { t } = useLanguage();
  const { data: portfolioData, loading, error } = useLocalizedData('portfolio');

  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);
  
  // Re-run dataImage when portfolioData changes
  useEffect(() => {
    if (portfolioData && portfolioData.items) {
      setTimeout(() => {
        dataImage();
        portfolioHover();
      }, 100);
    }
  }, [portfolioData]);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  
  // Initialize Isotope when portfolioData is loaded
  useEffect(() => {
    if (portfolioData && portfolioData.items && portfolioData.items.length > 0) {
      const timeoutId = setTimeout(() => {
        const galleryElement = document.querySelector(".gallery_zoom");
        const gridItems = document.querySelectorAll(".grid-item");
        
        if (galleryElement && gridItems.length > 0) {
          // Destroy existing instance if any
          if (isotope.current) {
            isotope.current.destroy();
          }
          
          isotope.current = new Isotope(".gallery_zoom", {
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
              columnWidth: ".grid-item",
            },
            animationOptions: {
              duration: 750,
              easing: "linear",
              queue: false,
            },
          });
        }
      }, 1000); // Increase timeout to ensure DOM is ready
      
      return () => {
        clearTimeout(timeoutId);
        if (isotope.current) {
          isotope.current.destroy();
          isotope.current = null;
        }
      };
    }
  }, [portfolioData]);
  
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState(null);

  // Don't render until data is loaded to avoid Isotope errors
  if (loading || !portfolioData || !portfolioData.items) {
    return (
      <div className="hongoanh_tm_section" id="portfolio">
        <div className="hongoanh_tm_portfolio">
          <div className="container">
            <div className="hongoanh_tm_main_title" data-align="center">
              <span>Portfolio</span>
              <h3>Loading...</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="hongoanh_tm_section" id="portfolio">
        <div className="hongoanh_tm_portfolio">
          <div className="container">
            <div className="hongoanh_tm_main_title" data-align="center">
              <span>Portfolio</span>
              <h3>Error loading portfolio data</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleDetailClick = (item) => {
    setPopupData(item);
    setPopup(true);
  };

  return (
    <div className="hongoanh_tm_section" id="portfolio">
      <DetailsPopup 
        open={popup} 
        close={() => setPopup(false)} 
        data={popupData}
      />
      <div className="hongoanh_tm_portfolio">
        <div className="container">
          <div className="hongoanh_tm_main_title" data-align="center">
            <span>{portfolioData.title}</span>
            <h3>{portfolioData.subtitle}</h3>
            <p>{portfolioData.description}</p>
          </div>
          <div className="portfolio_filter">
            <ul>
              {portfolioData.filters && portfolioData.filters.map((filter) => (
                <li key={filter.key}>
                  <a
                    className={`c-pointer ${activeBtn(filter.key)}`}
                    onClick={handleFilterKeyChange(filter.key)}
                  >
                    {filter.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hongoanh_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {portfolioData.items && portfolioData.items.map((item) => {
                const renderPortfolioItem = () => {
                  switch (item.type) {
                    case 'youtube':
                      return (
                        <a
                          className="popup-youtube"
                          href={item.link}
                        >
                          <img 
                            src={item.thumb} 
                            alt={item.title} 
                          />
                          <div
                            className="main"
                            data-img-url={item.img}
                          />
                        </a>
                      );
                    case 'vimeo':
                      return (
                        <a
                          className="popup-vimeo"
                          href={item.link}
                        >
                          <img 
                            src={item.thumb} 
                            alt={item.title} 
                          />
                          <div
                            className="main"
                            data-img-url={item.img}
                          />
                        </a>
                      );
                    case 'soundcloud':
                      return (
                        <a
                          className="soundcloude_link mfp-iframe audio"
                          href={item.link}
                        >
                          <img 
                            src={item.thumb} 
                            alt={item.title} 
                          />
                          <div
                            className="main"
                            data-img-url={item.img}
                          />
                        </a>
                      );
                    case 'popup':
                      return (
                        <a className="zoom" href={item.link}>
                          <img 
                            src={item.thumb} 
                            alt={item.title} 
                          />
                          <div
                            className="main"
                            data-img-url={item.img}
                          />
                        </a>
                      );
                    case 'detail':
                    default:
                      return (
                        <a className="portfolio_popup" href="#" onClick={(e) => {
                          e.preventDefault();
                          handleDetailClick(item);
                        }}>
                          <img 
                            src={item.thumb} 
                            alt={item.title} 
                          />
                          <div
                            className="main"
                            data-img-url={item.img}
                          />
                        </a>
                      );
                  }
                };

                return (
                  <li 
                    key={item.id} 
                    className={`${item.category} grid-item`}
                    onClick={item.type === 'detail' ? () => handleDetailClick(item) : undefined}
                  >
                    <div className="inner">
                      <div
                        className="entry hongoanh_tm_portfolio_animation_wrap"
                        data-title={item.title}
                        data-category={item.category}
                      >
                        {renderPortfolioItem()}
                      </div>
                      <div className="mobile_title">
                        <h3>{item.title}</h3>
                        <span>{item.labelCategory}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="/img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="/img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;

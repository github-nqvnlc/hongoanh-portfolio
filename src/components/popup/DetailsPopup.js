// import Image from "next/image"; // Using regular img tags for static assets
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const DetailsPopup = ({ open, close, data }) => {
  const { language } = useLanguage();
  const descriptionWrapRef = useRef(null);
  const [imagePreview, setImagePreview] = useState({ show: false, src: null });

  useEffect(() => {
    if (open && descriptionWrapRef.current) {
      descriptionWrapRef.current.scrollTop = 0;
    }
  }, [open]);

  const handleImageClick = (imageSrc) => {
    console.log('Image clicked:', imageSrc);
    console.log('Current imagePreview state before update:', imagePreview);
    setImagePreview({ show: true, src: imageSrc });
    console.log('ImagePreview state updated');
  };

  const closeImagePreview = () => {
    console.log('Closing image preview');
    setImagePreview({ show: false, src: null });
  };

  if (!data) return null;
  
  console.log('DetailsPopup data:', data);
  console.log('DetailsPopup open state:', open);
  
  return (
    <>
      <div className={`hongoanh_tm_modalbox ${open ? "opened" : ""}`}>
        <div className="box_inner">
          <div className="close">
            <a 
              href="#portfolio" 
              onClick={(e) => {
                close();
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
          <div className="description_wrap" ref={descriptionWrapRef}>
            <div className="popup_details">
              <div className="top_image">
                <img 
                  src={data.thumb || "/img/thumbs/4-2.jpg"} 
                  alt={data.title || "Portfolio item"}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleImageClick(data.img || data.thumb);
                  }}
                  style={{ cursor: 'pointer' }}
                  title="Click to view full size"
                />
                <div
                  className="main"
                  data-img-url={data.img || data.thumb}
                  style={{ 
                    backgroundImage: `url("${data.img || data.thumb}")`,
                    pointerEvents: 'none'
                  }}
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
                            <img 
                              src={image} 
                              alt="image"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleImageClick(image);
                              }}
                              style={{ cursor: 'pointer' }}
                              title="Click to view full size"
                            />
                            <div
                              className="main"
                              data-img-url={image}
                              style={{
                                backgroundImage: `url("${image}")`,
                                pointerEvents: 'none'
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

      {/* Image Preview Popup */}
      {imagePreview.show && (
        <div className="image-preview-overlay" onClick={closeImagePreview}>
          <div className="image-preview-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-preview-close" onClick={closeImagePreview}>
              <i className="icon-cancel" />
            </button>
            <img 
              src={imagePreview.src} 
              alt="Preview" 
              className="image-preview-img"
              onLoad={() => console.log('Image loaded successfully')}
              onError={(e) => console.error('Image failed to load:', e)}
            />
          </div>
        </div>
      )}
      {console.log('Image preview state:', imagePreview)}
    </>
  );
};
export default DetailsPopup;

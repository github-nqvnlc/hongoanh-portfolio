import parse from "html-react-parser";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchData } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const Service = ({ dark }) => {
  const [data, setData] = useState([]);
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    async function loadData() {
      const result = await fetchData("/static/service.json");
      setData(result);
    }
    loadData();
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupdata}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="service_list">
            <ul>
              {data &&
                data.map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                        onClick={() => onClick(i)}
                      >
                        <div className="list_inner tilt-effect">
                          <span className="icon">
                            {parse(data.icon.svg)}
                            {dark ? (
                              <Image
                                className="back"
                                src={data.icon.iconBgDark}
                                alt="image"
                                width={80}
                                height={80}
                              />
                            ) : (
                              <Image
                                className="back"
                                src={data.icon.iconBg}
                                alt="image"
                                width={80}
                                height={80}
                              />
                            )}
                          </span>
                          <div className="title">
                            <h3>{data.title}</h3>
                            <span className="price">
                              Starts from <span>${data.price}</span>
                            </span>
                          </div>
                          <div className="text">
                            <p>{data.shortDec}</p>
                          </div>
                          <a className="dizme_tm_full_link" href="#" />
                          <Image
                            className="popup_service_image"
                            src="/img/service/1.jpg"
                            alt="image"
                            width={400}
                            height={300}
                          />
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src="/img/brushes/service/5.png" alt="image" width={300} height={300} />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <Image src="/img/brushes/service/6.png" alt="image" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};
export default Service;

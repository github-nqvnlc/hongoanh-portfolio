import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchData } from "../utilits";
import { useLanguage } from "../context/LanguageContext";
import { useLocalizedData } from "../hooks/useLocalizedData";

const Contact = () => {
  const { t } = useLanguage();
  const { data } = useLocalizedData("info");
  return (
    <div className="hongoanh_tm_section" id="contact">
      <div className="hongoanh_tm_contact">
        <div className="container">
          <div className="hongoanh_tm_main_title" data-align="center">
            <span>{t("contact.title")}</span>
            <h3>{t("contact.subtitle")}</h3>
            <p>{t("contact.description")}</p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && data.contact.address && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>{t("contact.address_label")}</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>{t("contact.email_label")}</h3>
                        <span>
                          <a href="#">{data.contact && data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>{t("contact.phone_label")}</h3>
                        <span>{data.contact && data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>{t("contact.required_fields")}</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          placeholder={t("contact.name_placeholder")}
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder={t("contact.email_placeholder")}
                        />
                      </li>
                      <li>
                        <input
                          id="phone"
                          type="number"
                          placeholder={t("contact.phone_placeholder")}
                        />
                      </li>
                      <li>
                        <input
                          id="subject"
                          type="text"
                          placeholder={t("contact.subject_placeholder")}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder={t("contact.message_placeholder")}
                      defaultValue={""}
                    />
                  </div>
                  <div className="hongoanh_tm_button">
                    <a id="send_message" href="#">
                      <span>{t("contact.submit_button")}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <Image
                src="/img/brushes/contact/2.png"
                alt="image"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="hongoanh_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height={375}
                  style={{ width: "100%" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=1/27%20Phan%20H%C3%A0nh%20S%C6%A1n,%20%C4%90%C3%A0%20n%E1%BA%B5ng&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                />
              </div>
            </div>
            {/* Get your API here https://www.embedgooglemap.net */}
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image
            src="/img/brushes/contact/1.png"
            alt="image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;

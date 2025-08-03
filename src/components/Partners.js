import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchData } from "../utilits";
const Partners = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function loadData() {
      const result = await fetchData("/static/partners.json");
      setData(result);
    }
    loadData();
  }, []);
  return (
    <div className="hongoanh_tm_section">
      <div className="hongoanh_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              {data &&
                data.map((img, i) => (
                  <li
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={i}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                  >
                    <div className="list_inner">
                                             <Image
                         src={img && img.logo && img.logo[dark ? "dark" : "light"]}
                         alt="image"
                         width={120}
                         height={60}
                       />
                       <a className="hongoanh_tm_full_link" href={img && img.link} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src="/img/brushes/partners/1.png" alt="image" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};
export default Partners;

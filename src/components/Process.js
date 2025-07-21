import parse from "html-react-parser";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchData } from "../utilits";
const Process = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function loadData() {
      const result = await fetchData("/static/workProcess.json");
      setData(result);
    }
    loadData();
  }, []);
  return (
    <div className="dizme_tm_section" id="process">
      <div className="dizme_tm_process">
        <div className="container">
          <div className="list">
            <ul>
              {data &&
                data.map((data, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="icon">
                        <span>
                          <Image
                            className="brush"
                            src={`/img/brushes/process${dark ? "/dark" : ""}/${
                              i + 1
                            }.png`}
                            alt="image"
                            width={80}
                            height={80}
                          />
                          {parse(data.icons[dark ? "dark" : "light"])}
                        </span>
                      </div>
                      <div className="title">
                        <h3>{data.title}</h3>
                      </div>
                      <div className="text">
                        <p>{data.dec}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;

import parse from "html-react-parser";
import Image from "next/image";
import { useLocalizedData } from "../hooks/useLocalizedData";
const Process = ({ dark }) => {
  const { data, loading, error } = useLocalizedData("workProcess"); 
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Error loading process data:', error);
  }
  return (
    <div className="hongoanh_tm_section" id="process">
      <div className="hongoanh_tm_process">
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
                                                     {data.icons && parse(data.icons[dark ? "dark" : "light"])}
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

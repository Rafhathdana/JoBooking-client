import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

import Carousal from "@itseasy21/react-elastic-carousel";
// import "./styles.css";

import Hotels from "../../image/Hotels.png";
import Appartment from "../../image/Appartment.png";
import Resort from "../../image/Resort.png";
import Villas from "../../image/Villas.png";
import Cabins from "../../image/Cabins.png";
import Cottages from "../../image/Cottages.png";
// import Glamping from './image/Glamping.png';
import Serviced_appartment from "../../image/Serviced_appartment.png";
import Holidayhomes from "../../image/Holidayhomes.png";
import Guesthomes from "../../image/Guesthomes.png";
import hostels from "../../image/hostels.png";
const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
    { width: 800, itemsToShow: 4, itemsToScroll: 1, pagination: false },
  ];

  const images = [
    Hotels,
    Appartment,
    Resort,
    Villas,
    Cabins,
    Cottages,
    Serviced_appartment,
    Holidayhomes,
    Guesthomes,
    hostels,
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          <Carousal breakPoints={breakPoints} pagination={false}>
            {data &&
              images.map((img, i) => (
                <div className="fp" key={i}>
                  <div className="divimg">
                    <img className="browsimg" src={img} alt="Hotels" />
                  </div>
                  <div className="diver">
                    <h4 className="subhead">{data[i]?.type}</h4>
                    <p className="bbrowssub">
                      {data[i]?.count}{"  "} {data[i]?.type}
                    </p>
                  </div>
                </div>
              ))}
          </Carousal>
        </>
      )}
    </div>
  );
};

export default PropertyList;

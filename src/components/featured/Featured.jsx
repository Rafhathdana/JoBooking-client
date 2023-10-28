import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading Please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf2.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf2.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf2.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

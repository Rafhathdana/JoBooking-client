import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;

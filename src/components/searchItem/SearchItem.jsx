import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/402822529.webp?k=8546f64b0f65d80c4b15bad7a37b188f5e9023125d7247406611075a585202fd&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Appartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
          Entrie Studio * 1 bathroom * 21m2 1 Full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

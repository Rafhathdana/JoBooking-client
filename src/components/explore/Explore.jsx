import Carousal from "@itseasy21/react-elastic-carousel";
import "./explore.css";
export const Explore = () => {
  const dataSheet = [
    {
      url: "https://cf.bstatic.com/xdata/images/city/400x300/619952.webp?k=ea2c27c813f0f20fdbe688bd206f8a156c4c84a151ebc30f7d4c0934b8fdc18c&o=",
      country: "Dubai",
      details: "United Arab Emirates",
      deta: (
        <>
          <a href="/">2,912 vacation rentals</a>
          <a href="/">447 apartments</a>
          <a href="/">247 hostels</a>
          <a href="/">192 B&Bs</a>
        </>
      ),
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/400x300/619693.webp?k=f8b4867c83350e9d4bf107ee636b7f5a9338c58b24465c5bbc0f772e562217aa&o=",
      country: "Singapore",
      details: "Singapore",
      deta: (
        <>
          <a href="/">112 vacation rentals</a>
          <a href="/">103 apartments</a>
          <a href="/">638 vacation rentals</a>
        </>
      ),
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/400x300/620035.webp?k=b2af9f1a1c47c00d7464dc35d5d5f1cbaab3a26958bcbeb99ce44c6be3d20ca7&o=",
      country: "Bangkok",
      details: "Thailand",
      deta: (
        <>
          <a href="/">638 vacation rentals</a>
          <a href="/">447 apartments</a>
          <a href="/">398 vacation rentals</a>
          <a href="/">222 B&Bs</a>
          <a href="/">140 serviced apartments</a>
        </>
      ),
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/400x300/613098.webp?k=84b0ca81bc30f78bf96f407cf11d102cb85cb9a1e59acba20e1956c10ae05f9d&o=",
      country: "London",
      details: "United Kingdom",
      deta: (
        <>
          <a href="/">3,747 vacation rentals</a>
          <a href="/">301 homestays</a>
          <a href="/">257 villas</a>
          <a href="/">257 vacation homes</a>
        </>
      ),
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/400x300/613091.webp?k=3097e51fff5124b7bfc362ccffcd420d78677cd0331b45054cf02e5f8082e434&o=",
      country: "Paris",
      details: "France",
      deta: (
        <>
          <a href="/">2,766 vacation rentals</a>
          <a href="/">2,697 apartments</a>
          <a href="/">146 serviced apartments</a>
          <a href="/">74 B&Bs</a>
          <a href="/">33 hostels</a>
        </>
      ),
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/400x300/972588.webp?k=5ebdb1721f249f78e1007361b6b5a57179490bc316d508a448c7e9034e512d24&o=",
      country: "Amsterdam",
      details: "Netherlands",
      deta: (
        <>
          <a href="/">652 vacation rentals</a>
          <a href="/">322 B&Bs</a>
          <a href="/">238 apartments</a>
          <a href="/">84 homestays</a>
          <a href="/">37 hostels</a>
        </>
      ),
    },
    {
      url: "https://cf.bstatic.com/xdata/images/city/400x300/684770.webp?k=221802a90ad365c271125637ebf0ee9b14f4ddcc18103125505b6eee013019f5&o=",
      country: "New Delhi",
      details: "India",
      deta: (
        <>
          <a href="/">398 vacation rentals</a>
          <a href="/">222 B&Bs</a>
          <a href="/">178 homestays</a>
          <a href="/">151 guest houses</a>
          <a href="/">140 apartments</a>
        </>
      ),
    },
    // Add more objects as needed
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
    { width: 800, itemsToShow: 4, itemsToScroll: 1, pagination: false },
  ];

  return (
    <div className="carousel-container">
      <Carousal breakPoints={breakPoints}>
        {dataSheet.map((item, index) => (
          <div className="box" key={index}>
            <div
              className="img-div"
              style={{
                backgroundImage: `url(${item.url})`,
              }}
            >
              <div className="img-text">
                <h1>{item.country}</h1>
                <p>{item.details}</p>
              </div>
            </div>
            <div className="links">{item.deta}</div>
          </div>
        ))}
      </Carousal>
    </div>
  );
};

import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import Carousal from "@itseasy21/react-elastic-carousel";
export const FeaturedProperties = () => {
  const homeData = [
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max500/121406433.jpg?k=35435a71d5387f6a42b598d421231b63f0a4c3f1886d9734e6e669e0576cbb3d&o=",

      title: "Luxury Apartments Klara",
      subtitle: "split",
      price: "13,961",
      rating: "9.5",
      ex: "Exceptional",
      reviews: "395",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=",
      title: "Sugar Loft Apartments",
      subtitle: "Rio de janerio",
      price: "3,713",
      rating: "9.0",
      ex: "Wonderful",
      reviews: "321",
    },

    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max500/73715592.jpg?k=9345147037f0931af5b86b3ec894b5e43681391f6ec7775c4555814a01552e25&o=",
      title: "The Apartments by The Slone Club",
      subtitle: "London",
      price: "27,310",
      rating: "9.4",
      ex: "wonderful",
      reviews: "119",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max500/39615603.jpg?k=ffa7f14b1c5235c8883662876734f832a596de617cd8380ce1025fb21bc92df9&o=",
      title: "KeizersgrachtSuite471",
      subtitle: "Amsterdam",
      price: "68,931",
      rating: "9.6",
      ex: "exptional",
      reviews: "60",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max500/45976851.jpg?k=7bd839dd07e1384ebfde004069e25090a4a901728e9bdc8e200f411ed243999d&o=",
      title: "Luxury 3 Bedrooms Le Louvre I ",
      subtitle: "Paris",
      price: "24,920",
      rating: "8.6",
      ex: "Excellent",
      reviews: "56",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max500/73715592.jpg?k=9345147037f0931af5b86b3ec894b5e43681391f6ec7775c4555814a01552e25&o=",
      title: "Apartments on Blinskogo ulitsa",
      subtitle: "Saint Peterburg",
      price: "22,134",
      rating: "9,7",
      ex: "Exceptional",
      reviews: "30",
    }, // {   img: "",
    //     title: "",
    // subtitle:"",
    // price: "",
    // rating:"",
    // ex:"",
    // reviews:"",
    // },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 768, itemsToShow: 3, itemsToScroll: 1, pagination: false },
    { width: 800, itemsToShow: 4, itemsToScroll: 1, pagination: false },
  ];
  return (
    <div className="contain">
      <div className="carousel-container">
        <Carousal breakPoints={breakPoints}>
          {homeData.map((homeDatas, index) => (
            <div className="dived" key={index}>
              <img src={homeDatas.img} alt="hotelimage" />
              <p className="title">{homeDatas.title}</p>
              <p className="subtitle">{homeDatas.subtitle}</p>
              <p className="price">Staring from ₹{homeDatas.price}</p>

              <div className="flexDiv">
                <div className="rating">{homeDatas.rating}</div>
                <p className="e">{homeDatas.ex}</p>
                <p className="reviews">. {homeDatas.reviews} reviews</p>
              </div>
            </div>
          ))}
        </Carousal>
      </div>
    </div>
  );
};

//   const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

//   return (
//     <div className="fp">
//       {loading ? (
//         "Loading"
//       ) : (
//         <>
//           {data.map((item) => (
//             <div className="fpItem" key={item._id}>
//               <img src={item.photos[0]} alt="" className="fpImg" />
//               <span className="fpName">{item.name}</span>
//               <span className="fpCity">{item.city}</span>
//               <span className="fpPrice">
//                 Starting from ${item.cheapestPrice}
//               </span>
//               {item.rating && (
//                 <div className="fpRating">
//                   <button>{item.rating}</button>
//                   <span>Excellent</span>
//                 </div>
//               )}
//             </div>
//           ))}
//         </>
//       )}
//     </div>
//   );
// };

// export default FeaturedProperties;

// export const HomeGuestsDiv = () => {

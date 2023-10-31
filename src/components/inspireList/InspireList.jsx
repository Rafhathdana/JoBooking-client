import "./inspireList.css";

const dataSheet = [
  {
    wide: "320px",
    img: "https://cf.bstatic.com/xdata/images/xphoto/540x405/122925057.webp?k=09f14b17546723a74f3c71cc9d5e5040e60c1594234b5a06cc3ce376ad299da5&o=",
    taf: "Germany's most thrilling water parks",
    tahj: "From chaotic racer slides to calming saunas, there's something for everyone.",
  },
  {
    wide: "320px",
    img: "https://cf.bstatic.com/xdata/images/xphoto/540x405/124728212.webp?k=7b5c982e56da0da2c45cb3e7663683b608d309a239a77ba2729f14cc6f0f36b2&o=",
    taf: "48 hours in Tokyo for every traveler",
    tahj: "The perfect itinerary for a two-day trip around Tokyo – for every type of explorer.",
  },
  {
    wide: "320px",
    img: "https://cf.bstatic.com/xdata/images/xphoto/540x405/122809197.webp?k=e7f86e398e43427ca04f743292823c6cdbc72ce486cb8a5609af837afd6f5255&o=",
    taf: "8 ideas for an incredible solo trip",
    tahj: "Make the most of me time by exploring a new city or just getting away from it all.",
  },
  {
    wide: "490px",
    img: "https://cf.bstatic.com/xdata/images/xphoto/540x405/121352725.webp?k=b630e51b3ad653b598a22809bd644c80513f8911932846d0ff981ee236a36a35&o=",
    taf: "Wild swim in Europe’s 5 dreamiest lakes and fjords",
    tahj: "Fun adventures through glacial waters in Norway and summer swims in Provençal lakes.",
  },
  {
    wide: "490px",
    img: "https://cf.bstatic.com/xdata/images/xphoto/540x405/63486779.webp?k=316f6f1b92d64eb083891b2d8cf4d6f9b88a487052eed17a97846ff1f74da509&o=",
    taf: "5 breathtaking stays with a private pool",
    tahj: "Enjoy your vacation reclining by a private infinity pool or a panoramic plunge pool.",
  },
];

export const InspireList = () => {
  return (
    <div className="contin">
      <div className="flexDiv">
        {dataSheet.map((data, index) => (
          <div className="cont" style={{ width: data.wide }} key={index}>
            <div
              className="background"
              style={{ backgroundImage: `url(${data.img})` }}
            ></div>
            <div className="text">
              <h1>{data.taf}</h1>
              <p>{data.tahj}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

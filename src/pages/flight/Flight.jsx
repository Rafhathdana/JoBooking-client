import "./flight.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlightHeader from "../../components/flightHeader/FlightHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faExchangeAlt,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

export default function Flights() {
  const [popularFlight, setPopularFlight] = useState([]);
  const [trendingCity, setTrendingCity] = useState([]);
  const [date, setDate] = useState(new Date().getDate());
  const nextDate = 7 + date;

  const [worldWideFlight, setWorldWideFlight] = useState([]);

  const getPopularFlights = () => {
    return fetch(`https://api.aviationstack.com/v1/airlines
    ? access_key = 8725ffbc41842bd58395879a74a48b9c`)
      .then((res) => res.json())
      .then((res) => {
        setPopularFlight(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTrendingCity = () => {
    return fetch(
      `http://api.aviationstack.com/v1/airports?access_key=8725ffbc41842bd58395879a74a48b9c`
    )
      .then((res) => res.json())
      .then((res) => {
        setTrendingCity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWorldWideFlight = (text) => {
    return fetch(`https://booking-flights-api.herokuapp.com/${text}`)
      .then((res) => res.json())
      .then((res) => {
        setWorldWideFlight(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPopularFlights()
      .then((res) => res.json())
      .then((res) => {
        setPopularFlight(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getTrendingCity();
  }, []);

  return (
    <>
      <Navbar />
      <Header active="header" />
      <div className="box1">
        <div>
          <h1>Compare and book flights with ease</h1>
          <p>Discover your next dream destination</p>
        </div>
        <FlightHeader />
      </div>
      <div className="popularFlight">
        <h1>Popular flights near you</h1>
        <p>Find deals on domestic and international flights</p>
        <div className="popularCard">
          {popularFlight?.map((item) => {
            return (
              <div key={item.icao_code} className="card">
                <Link to={`/flights/${item.origin}`} className="cardlink">
                  <div>
                    <img src={item.image} alt="" className="img" />
                  </div>
                  <h5 className="text">
                    {item.origin} to {item.destination}
                  </h5>
                  <p className="text">
                    Trip Duration: {item.startTime} - {item.endTime}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="popularFlight">
        <h1>Trending cities</h1>
        <p>Book flights to a destination popular with travelers from India</p>
        <div className="popularCard">
          {trendingCity?.map((item) => {
            return (
              <div key={item.id} className="card">
                <Link to={`/flights/${item.city}`} className="cardlink">
                  <div>
                    <img src={item.image} alt="" className="img" />
                  </div>
                  <h4 className="text">{item.airport_name}</h4>
                  <p className="text">{item.country_name}</p>
                  <p className="text">
                    Trip Date: Jan {date} - {nextDate}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="box2">
        <div className="box2Text">
          <FontAwesomeIcon icon={faExchangeAlt} className="Icon" />
          <div>
            <h5>Huge selection</h5>
            <p>Easily compare thousands of flights, all in one place</p>
          </div>
        </div>
        <div className="box2Text">
          <FontAwesomeIcon icon={faAlignLeft} className="Icon" />
          <div>
            <h5>No hidden fees</h5>
            <p>Always know exactly what you’re paying for</p>
          </div>
        </div>
        <div className="box2Text">
          <FontAwesomeIcon icon={faPlane} className="Icon" />
          <div>
            <h5>More flexibility</h5>
            <p>Keep your travel dates open with flexible ticket options</p>
          </div>
        </div>
      </div>
      <div className="popularFlight">
        <h1>Fly worldwide with Booking.com</h1>
        <p>Flights from wherever you are to wherever you want to go</p>
        <div>
          <div className="btnBox">
            {["Asia", "Europe", "North-America", "Oceania"].map((text) => {
              return (
                <button
                  key={text}
                  onClick={() => getWorldWideFlight(text)}
                  className="btn"
                >
                  {text}
                </button>
              );
            })}
          </div>
          <hr />
          <div className="box3">
            {worldWideFlight?.map((item) => {
              return (
                <div key={item.id} className="continentCard">
                  <Link
                    to={`/flights/${item.origin}`}
                    className="continentCardlink"
                  >
                    <div>
                      <img src={item.image} alt="" className="img1" />
                    </div>
                    <div>
                      <h5 className="text">
                        {item.origin} to {item.destination}
                      </h5>
                      <p className="text">{item.description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="popularFlight">
        <h1>Frequently asked questions</h1>
        <div className="questionBox">
          <div className="questionCard">
            <h5>How do I find the cheapest flights on Booking.com?</h5>
            <p>
              You can sort flights by price to see them from cheapest to most
              expensive. To find the cheapest flights, you also need to consider
              factors like when you're booking and want to travel.
            </p>
          </div>
          <div className="questionCard">
            <h5>Can I book one-way flights on Booking.com?</h5>
            <p>
              Yes, you can book one-way, round-trip, and multi-city flights on
              our site.
            </p>
          </div>
          <div className="questionCard">
            <h5>How far in advance can I book a flight?</h5>
            <p>
              You can book a flight up to one year before your departure date.
            </p>
          </div>
          <div className="questionCard">
            <h5>Do flights get cheaper closer to departure?</h5>
            <p>
              Generally, flight prices are more likely to increase the closer
              you get to your flight date.
            </p>
          </div>
          <div className="questionCard">
            <h5>What is a flexible ticket?</h5>
            <p>
              A flexible ticket allows you to change your flight with the same
              airline by only paying the fare and tax difference. It can only be
              used for one confirmed change. You can add the flexible ticket
              when booking your flight.
            </p>
          </div>
          <div className="questionCard">
            <h5>Does Booking.com charge credit card fees?</h5>
            <p>
              No, we don't charge any credit card fees. You can always see
              exactly what you’re paying for in the price breakdown when
              reviewing your booking.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

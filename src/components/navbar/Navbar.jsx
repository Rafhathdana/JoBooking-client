import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Profile } from "./Profile";
import API from "../../../api";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = async () => {
    try {
      const res = await API.delete("/auth/logout");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.log("some error");
    }
  };

  return (
    <div className="navbarContainer">
      <div className="navbarUpperSection">
        <div style={{ display: "flex" }}>
          <Link
            to="/"
            style={{
              color: "inherit",
              alignSelf: "center",
              textDecoration: "none",
            }}
          >
            <span className="logo">JoBooking</span>
          </Link>
        </div>
        <div className="navbarUpperSectionItems">
          <ul
            style={{
              alignItems: "center",
            }}
          >
            <li className="inr">INR</li>
            <li className="indianFlag">
              <img
                src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png"
                alt="india's-flag"
              />
            </li>
            <li>
              <svg
                className="questionIcon"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
              </svg>
            </li>
            <li className="propertyList">
              <button>List your property</button>
            </li>
            {!user && (
              <li className="signButton">
                <Link to="/register">
                  <button>Register</button>
                </Link>
              </li>
            )}
            {!user && (
              <li className="signButton">
                <Link to="/login">
                  <button>Sign in</button>
                </Link>
              </li>
            )}
            {user && <Profile />}
          </ul>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;

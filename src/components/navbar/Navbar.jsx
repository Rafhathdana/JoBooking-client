import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.delete("/auth/logout");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err) {
      console.log("some error");
    }
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">JoBooking</span>
        </Link>
        {user ? (
          <>
            <div className="navItems">
              {user.username}
              <button className="navButton" onClick={() => handleLogout()}>
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={() => navigate("/register")}>
              Register
            </button>
            <button className="navButton" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

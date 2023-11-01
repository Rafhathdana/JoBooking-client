import { useContext, useState } from "react";
import "./profile.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import API from "../../../api";

export const Profile = () => {
  const [dropdown, setDropdown] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const handleLogout = async () => {
    try {
      const res = await API.delete("/auth/logout");
      dispatch({ type: "LOGOUT" });
      alert("Successfully Logged Out");

      navigate("/");
    } catch (err) {
      console.log("some error");
    }
  };

  return (
    <>
      <div
        className="profile"
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <div>
          {user.details.imageUrl ? (
            <img src={user.details.imageUrl} alt="userprofile" />
          ) : (
            <FontAwesomeIcon icon={faUser} className="piconimg" />
          )}
        </div>
      </div>
      {dropdown && (
        <>
          <div className="options">
            <div className="optionItem">
              <h4>{user.details.username}</h4>
            </div>
            <div className="logout" onClick={() => handleLogout()}>
              Logout
            </div>
          </div>
        </>
      )}
    </>
  );
};

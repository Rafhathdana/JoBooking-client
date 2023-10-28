import { useContext, useEffect, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      console.log(user);
      navigate("/");
    }
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            id="username"
            placeholder="username"
            className="lInput"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            id="password"
            placeholder="password"
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </>
  );
};

export default Login;

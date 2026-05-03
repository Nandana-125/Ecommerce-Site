import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users === null) {
      alert("no user found");
      return;
    }

    if (users.some((u) => u.email === email && u.password === password)) {
      const loggedInUser = users.find(
        (m) => m.email === email && m.password === password
      );

      navigate("/");
      setIsLoggedIn(true);
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));
    } else {
      alert("no user found");
    }
  };

  return (
    <div>
      <div className="log">
        <div className="log-content">
          <img src="../public/register.jpg" />
          <div className="log-text">
            <h1>Welcome Back!</h1>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

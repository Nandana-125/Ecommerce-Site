import { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import ToastContext from "../context/ToastContext";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email && u.password === password)) {
      const loggedInUser = users.find(
        (m) => m.email === email && m.password === password
      );

      navigate("/");
      login(loggedInUser);
    } else {
      showToast("⚠️ No user found");
    }
  };

  return (
    <div>
      <div className="log">
        <div className="log-content">
          <img src="../public/register.jpg" />
          <div className="log-text">
            <h1>Welcome Back To Shopaholic 🎉 !</h1>
            <p>Sign in to your account</p>
            <div className="form-group">
              <p>Email</p>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <p>Password</p>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button onClick={handleLogin}>Login</button>
            <p>
              Dont have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

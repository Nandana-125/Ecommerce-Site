import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [added, setAdded] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users === null) {
      setAdded(true);
      setMessage("⚠️ No users found");
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
      setAdded(true);
      setMessage("⚠️ No user found");
    }
    setTimeout(() => setAdded(false), 2000);
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
      <Toast added={added} message={message} />
    </div>
  );
};

export default Login;

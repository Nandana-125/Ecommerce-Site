import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [added, setAdded] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCreate = () => {
    if (password !== confirmPass) {
      setAdded(true);
      setMessage("Passwords donot match❗️");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)) {
      setAdded(true);
      setMessage("Email already exists❗️");
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([
          ...users,
          { name: username, email: email, password: password },
        ])
      );
      setAdded(true);
      setMessage("Account Created successfully ✅");
      navigate("/Login");
    }
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div className="register">
        <div className="reg-content">
          <img src="../public/register.jpg" />
          <div className="reg-text">
            <h1>Welcome To Shopaholic!</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            <button onClick={handleCreate}>Create Account</button>
          </div>
        </div>
      </div>
      <Toast added={added} message={message} />
    </div>
  );
};

export default Register;

import { useState, useContext } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import ToastContext from "../context/ToastContext";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const { showToast } = useContext(ToastContext);
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigate = useNavigate();

  const handleCreate = () => {
    if (password !== confirmPass) {
      showToast("Passwords donot match❗️");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((u) => u.email === email)) {
      showToast("Email already exists❗️");
    } else {
      const newUser = { name: username, email: email, password: password };
      localStorage.setItem("users", JSON.stringify([...users, newUser]));

      showToast("Account Created successfully ✅");
      login(newUser);
      navigate("/");
    }
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
    </div>
  );
};

export default Register;

import { useState, useContext } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
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
            <div className="form-group">
              <h1>Welcome To Shopaholic!🎊</h1>
              <p>Best online shopping experience...</p>
            </div>

            <div className="form-group">
              <p>Username</p>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <p>Email id</p>
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

            <div className="form-group">
              <p>Confirm Password</p>
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>

            <button onClick={handleCreate}>Create Account</button>
            <p>
              Already have an account ? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

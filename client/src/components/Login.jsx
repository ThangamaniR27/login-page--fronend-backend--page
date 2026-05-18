import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
   const res = await axios.post(
  "https://login-page-fronend-backend-page-6.onrender.com/login",
  {
    email,
    password,
  }
);git add .
git commit -m "connect frontend to render backend"
git push

    if (res.data.success) {
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }

  } catch (err) {
    console.log(err);

    if (err.response) {
      alert(err.response.data.message);
    } else {
      alert("Backend server not reachable");
    }
  }
};

  return (
    <div className="container">
      <div className="login-box">
        <h1 className="logo">Spotify</h1>
        <p className="subtext">Log in to your account</p>

        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
}

export default Login;
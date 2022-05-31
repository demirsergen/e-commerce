import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInWithGoogle, user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") return;
    try {
      await signIn(email, password);
      navigate("/profile");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="login__wrapper">
      <div className="login__container">
        <form onSubmit={handleLogin} className="login__form">
          <div className="input__container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input__container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="google__login">
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

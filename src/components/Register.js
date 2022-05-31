import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { UserAuth } from "../context/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, signInWithGoogle, user } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/profile");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      {user === null && (
        <div className="register__wrapper">
          <div className="register__container">
            <form onSubmit={handleSubmit} className="register__form">
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
              <button type="submit">Register</button>
            </form>
            <div className="google__register">
              <button onClick={signInWithGoogle}>Register with Google</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;

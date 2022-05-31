import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { UserAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user, logout } = UserAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className={isLoggedIn ? "show profile__wrapper" : "hide"}>
      <div className="profile__topSection">
        <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="" />
        <div className="profile__topSection-right">
          <div className="username__container">
            <h3>Email: {user.email}</h3>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

import React from "react";
import "../App.css";

const Hero = () => {
  const scrollDown = () => {
    window.scrollBy(0, window.innerHeight);
  };
  return (
    <div className="hero__wrapper">
      <div className="hero__outerContainer">
        <div className="hero__outerContainer-left">
          <h1>
            Anything you want is as close as a click! Check out our deals!
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
            accusamus.
          </p>
          <button onClick={scrollDown}>View Our Products</button>
        </div>
        <div className="hero__outerContainer-right">
          <img src={require("../assets/images/hero1.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

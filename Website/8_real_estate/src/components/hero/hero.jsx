import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="hero-left">Left section</div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="apartment"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

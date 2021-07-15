import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <h2>
        {hero.name} {hero.adress}
      </h2>
      <p>{hero.city} </p>
      <p>{hero.birthDate}</p>
      <p>
      📧 {hero.email} - 📱 {hero.phone}
      </p>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = ({ hero }) => {
  return (
    <div>
      <h2>
        {hero.name} {hero.adress}
      </h2>
      <p>Localidad: {hero.city} </p>
      <p>Fecha de nacimiento: {hero.birthDate}</p>
      <p>
        {hero.email} - {hero.phone}
      </p>
    </div>
  );
};

export default Hero;

import React from "react";
import "./About.css";

const About = ({ hero }) => {
  return (
    <div className="about">
      <div>
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="item">
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;

import React from "react";

const About = ({hero}) => {
  return (
    <div>
      <div>
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;

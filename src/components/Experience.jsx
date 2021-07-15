import React from "react";

const Experience = ({experience}) => {
  return <div><div>
  {experience.map((item) => {
    return (
      <div key={JSON.stringify(item)}>
        <p>{item.name}</p>
        <p>{item.where}</p>
        <p>{item.date}</p>
      </div>
    );
  })}
</div></div>;
};

export default Experience;

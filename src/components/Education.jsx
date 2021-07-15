import React from "react";

const Education = ({education}) => {
  return <div>
  <div>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
  </div>;
};

export default Education;

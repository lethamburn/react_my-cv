import React from "react";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div>
    <p>{languages.language}</p>
    <p>Nivel escrito: {languages.wrlevel}</p>
    <p>Nivel oral: {languages.splevel}</p>
    <hr />
    <div>
   {habilities.map(txt => <p>{txt}</p>)}
   <hr />
</div>
      <div>
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;

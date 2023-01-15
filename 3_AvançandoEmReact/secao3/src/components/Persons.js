import React from "react";

const Persons = ({ name, age, job }) => {
  return (
    <div>
      <h2>Ficha de {name}</h2>
      <p>
        Meu nome é {name}, tenho {age} anos, trabalho de {job} e não uso coisas
        ilícitas
      </p>
      {age >= 18 ? (
        <p>Está Apto para dirigir</p>
      ) : (
        <p>Está inápto para dirigir</p>
      )}
    </div>
  );
};

export default Persons;

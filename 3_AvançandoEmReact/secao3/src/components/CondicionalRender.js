import React, { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Mikael Silva");
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Isso será exibido</p>}
      {!x && <p>Agora x é falso</p>}
      <div>If ternário</div>
      {name === "Mikael Almondes" ? (
        <h2>O nome realmente é {name}</h2>
      ) : (
        <h2>O nome não foi encontrado</h2>
      )}
      <button onClick={() => setName("Mikael Almondes")}>
        Clicar aqui para mudar o nome
      </button>
    </div>
  );
};

export default CondicionalRender;

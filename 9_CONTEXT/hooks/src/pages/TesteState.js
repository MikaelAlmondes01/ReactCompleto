import React, { useState } from "react";

const TesteState = () => {
  const [cont, setCont] = useState(0);
  const [showText, setShowText] = useState(true);

  const handleClick = () => {
    setCont((cont) => cont + 1);
    handleShowMessage(cont + 1);
  };
  console.log(cont);
  console.log(showText);
  const handleShowMessage = (cont) => {
    if (cont > 0) {
      setShowText(false);
    } else {
      setShowText(true);
    }
    console.log(cont + "da função");
  };

  return (
    <div>
      <h1>Contador exemplo</h1>
      <h3>{cont}</h3>
      <button onClick={handleClick}>Clique</button>
      {showText && <p>Bem vindo ao melhor ao somador por click</p>}
    </div>
  );
};

export default TesteState;

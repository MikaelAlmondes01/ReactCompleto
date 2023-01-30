import "./startScreen.css";

import React from "react";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h2>Secret word</h2>
      <p>Clique no botão a baixo para começar</p>
      <button onClick={startGame}>Começar o Jogo</button>
    </div>
  );
};

export default StartScreen;

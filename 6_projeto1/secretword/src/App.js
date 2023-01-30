//CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

//data
import { wordsList } from "./data/words";

// components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGamesStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPicketWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickedWordAndCategory = () => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return { word, category };
  };

  //starts do jogo
  const startGame = () => {
    //pegando objeto, sua categoria e a palavra
    const { word, category } = pickedWordAndCategory();

    //Criar um array das letras
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((L) => L.toLowerCase());

    console.log(wordLetters);
    console.log(word, category);

    //Estados
    setPicketWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGamesStage(stages[1].name);
  };

  //Process the letter input
  const verifyLetter = () => {
    setGamesStage(stages[2].name);
  };

  // reiniciar o jogo
  const retry = () => {
    setGamesStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;

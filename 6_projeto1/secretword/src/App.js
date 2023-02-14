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

const guessesQTY = 3;

function App() {
  const [gameStage, setGamesStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPicketWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]); //letras advinhadas
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQTY); // tentativas do usuário
  const [score, setScore] = useState(0);

  const pickedWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word);

    return { word, category };
  }, [words]);

  //starts do jogo
  const startGame = useCallback(() => {
    // limpar os dados
    clearLetterState();
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
    setLetters(wordLetters);

    setGamesStage(stages[1].name);
  }, [pickedWordAndCategory]);

  //Process the letter input
  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase();

    //verificar se a letra já foi advinhada
    if (
      guessedLetters.includes(normalizeLetter) ||
      wrongLetters.includes(normalizeLetter)
    ) {
      return;
    }

    //Empurra a letra advinhada ou descarta um palpite
    if (letters.includes(normalizeLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizeLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizeLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterState = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      // Resetar os dados
      clearLetterState();
      setGamesStage(stages[2].name);
    }
  }, [guesses]);

  //check win condicion
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)]; // Só deixa itens únicos no array

    if (guessedLetters.length === uniqueLetters.length) {
      console.log("entrou no if");
      //add score
      setScore((actualScore) => (actualScore += 100));
      // reiniciar o game com nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame]);
  // reiniciar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQTY);

    setGamesStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;

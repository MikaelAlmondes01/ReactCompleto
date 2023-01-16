import "./App.css";
import MyComponent from "./components/MyComponent";
import { useState } from "react";
function App() {
  const n = 15;
  const [name] = useState("Mikael");
  const redTitle = true;

  return (
    <div className="App">
      {/* css Global */}
      <h1>React com css</h1>
      {/* css do componente */}
      <MyComponent />
      {/* inline css */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Esse elemento foi estilizado de forma inline
      </p>

      {/* inline style dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        Css Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        Css Dinâmico
      </h2>
      <h2
        style={
          name === "Mikael"
            ? { color: "magenta", backgroundColor: "#000" }
            : null
        }
      >
        Css Dinâmico
      </h2>

      {/* Classes dinâmicas no Css */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse título vai ter uma classe dinâmica
      </h2>
    </div>
  );
}

export default App;

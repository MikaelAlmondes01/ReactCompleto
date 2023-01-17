import "./App.css";
import Myform from "./components/Myform";

function App() {
  return (
    <div className="App">
      <h1>Formulário</h1>
      <Myform user={{ name: "mikael", email: "mikaelalmondes10@gmail.com" }} />
    </div>
  );
}

export default App;

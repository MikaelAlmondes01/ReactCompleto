import "./App.css";
import zed from "./assets/zedLol.png";
function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* imagem em public */}
      <div>
        <img src="/jinxLol.jpg" alt="Jinx" />
      </div>
      <div>
        <img src={zed} alt="zedão" className="imagem" />
      </div>
    </div>
  );
}

export default App;

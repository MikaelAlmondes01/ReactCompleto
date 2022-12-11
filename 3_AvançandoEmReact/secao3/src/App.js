import "./App.css";
import zed from "./assets/zedLol.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";

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
      <div>
        <ManageData />
        <ListRender />
        <CondicionalRender />
      </div>
    </div>
  );
}

export default App;

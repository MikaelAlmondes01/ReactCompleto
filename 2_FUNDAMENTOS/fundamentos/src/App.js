//componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Eventos from "./components/Eventos";
import Challenge from "./components/Challenge";
//styles css
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Eventos />
      <Challenge />
    </div>
  );
}

export default App;

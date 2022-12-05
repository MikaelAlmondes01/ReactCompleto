//componentes
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Eventos from "./components/Eventos";
//styles css
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Eventos />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <h1>Olá Mundo</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

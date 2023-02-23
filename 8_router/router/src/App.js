import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

//components
import Navbar from "./component/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <h1>Olá Mundo</h1>
      <BrowserRouter>
        {/* Links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 4 - rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* 6 - nested route  */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* 7 - no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

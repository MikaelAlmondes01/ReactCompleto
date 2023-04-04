import React from "react";
import { useNavigate } from "react-router-dom"; // usado para redirecionar dentro do código
import { useState } from "react";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault(); //Para não recarregar a página ao clicar no botão de submit
    navigate("/search?q=" + query); // redireciona para a rota /search?q=valorDigitado
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;

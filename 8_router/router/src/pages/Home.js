import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./home.css";
const Home = () => {
  // 3- Carregamento de dados
  const url = "http://localhost:3000/products";

  const { data: items, loading, error } = useFetch(url);
  return (
    <div>
      <h1>Produtos</h1>
      <p>{error && <p>{error}</p>}</p>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              {/* 4 - rota dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;

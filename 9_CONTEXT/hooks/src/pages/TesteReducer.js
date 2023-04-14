import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "showText":
      return { ...state, showText: !state.showText };
    case "Reset":
      return { count: 0, showText: true };
    default:
      return "Essa ação não existe";
  }
};

const TesteReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const { count, showText } = state;

  const handleClick = () => {
    dispatch({ type: "Increment" });
    dispatch({ type: "showText" });
  };

  const handleReset = () => {
    dispatch({ type: "Reset" });
  };
  return (
    <div>
      <h1>Front Aplicação</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Clique aqui para incrementar</button>
      <button onClick={() => dispatch({ type: "Reset" })}>
        Clique para resetar
      </button>
      {showText && <p>Bem vindo ao teste em reducer</p>}
    </div>
  );
};

export default TesteReducer;

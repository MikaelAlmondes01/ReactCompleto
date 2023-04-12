// 3 - alterando contexto
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Adicione o valor no contador
      </button>
    </div>
  );
};

export default ChangeCounter;

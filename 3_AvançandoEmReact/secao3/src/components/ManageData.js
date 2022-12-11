import { useState } from "react";

const ManageData = () => {
  let ManageData = 10;

  const [numero, setNumero] = useState(5);
  console.log(ManageData);
  console.log(numero);
  return (
    <div>
      <p>Valor: {ManageData}</p>
      <button onClick={() => (ManageData = 5)}>Mudar o número!</button>
      <p>Valor: {numero}</p>
      <button
        onClick={() => {
          setNumero(10);
        }}
      >
        Mudar número!!
      </button>
    </div>
  );
};

export default ManageData;

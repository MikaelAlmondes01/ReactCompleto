import { useState } from "react";

const ManageData = () => {
  let ManageData = 10;

  const [numero, setNumero] = useState();

  return (
    <div>
      <button
        onClick={() => {
          ManageData = 5;
        }}
      >
        Mudar o número!
      </button>
    </div>
  );
};

export default ManageData;

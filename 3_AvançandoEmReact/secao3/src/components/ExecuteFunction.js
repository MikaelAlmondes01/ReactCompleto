import React from "react";

const ExecuteFunction = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para execultar a função</button>
    </div>
  );
};

export default ExecuteFunction;

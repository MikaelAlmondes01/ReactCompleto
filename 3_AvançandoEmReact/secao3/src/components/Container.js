import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}
      <h3>O teste é {myValue}</h3>
    </div>
  );
};

export default Container;

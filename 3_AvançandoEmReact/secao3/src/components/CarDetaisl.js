import React from "react";

const CarDetaisl = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p> Esse carro é novo</p>}
    </div>
  );
};

export default CarDetaisl;

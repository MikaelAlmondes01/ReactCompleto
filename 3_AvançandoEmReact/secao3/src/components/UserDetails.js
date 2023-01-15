import React from "react";

const userDetails = ({ name, job, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {job}</p>
      <p>Profissão: {age}</p>
    </div>
  );
};

export default userDetails;

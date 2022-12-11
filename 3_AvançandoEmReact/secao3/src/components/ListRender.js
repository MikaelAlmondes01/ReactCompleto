import React from "react";
import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Marcos", "Mikael", "Kairo", "José"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Mikael", age: 23 },
    { id: 2, name: "Marcos", age: 28 },
    { id: 3, name: "Kairo", age: 29 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete o usuário</button>
    </div>
  );
};

export default ListRender;

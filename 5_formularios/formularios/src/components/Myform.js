import React, { useState } from "react";
import "./Myform.css";

const Myform = ({ user }) => {
  //gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulário");
    console.log(name, email, bio, role);

    //  Limpar formulários
    setName("");
    setEmail("");
  };

  const [role, setRole] = useState("");

  return (
    <div>
      {/* envio do form   */}
      {/* Criação de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome aqui"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            placeholder="Digite seu email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* text area */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <label>
          <span>Função do sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
        {/* manipulação de valores */}
      </form>
    </div>
  );
};

export default Myform;

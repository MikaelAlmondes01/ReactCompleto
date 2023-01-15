import "./App.css";
import zed from "./assets/zedLol.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetaisl from "./components/CarDetaisl";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";
import Persons from "./components/Persons";

function App() {
  const name = "Mikael";

  const persons = [
    { id: 1, nome: "Mikael Rodrigues", idade: 12, profissao: "Aprendiz" },
    { id: 1, nome: "Théo Rodrigues", idade: 18, profissao: "Aprendiz" },
    { id: 1, nome: "Aghata Rodrigues", idade: 32, profissao: "Aprendiz" },
  ];

  const cars = [
    { id: 1, brand: "ferrari", color: "amarela", newCar: true, km: 0 },
    { id: 2, brand: "Fiat", color: "preta", newCar: false, km: 55522 },
    { id: 3, brand: "mizuno", color: "rosa", newCar: true, km: 0 },
    { id: 4, brand: "ponifice", color: "branco", newCar: false, km: 500 },
  ];

  const users = [
    { id: 1, nome: "Mikael", trabalho: "Programador", idade: 24 },
    { id: 2, nome: "Marcos", trabalho: "Empresário", idade: 21 },
    { id: 3, nome: "Kairo", trabalho: "Enfermeiro", idade: 18 },
    { id: 4, nome: "Mikaely", trabalho: "Advogada", idade: 32 },
    { id: 5, nome: "Luiza", trabalho: "Artesâ", idade: 55 },
    { id: 6, nome: "Junior", trabalho: "Aposentado", idade: 56 },
  ];
  function showMenssage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <div className="App">
      <h1>Seção 3</h1>
      {/* imagem em public */}
      <div>
        <img src="/jinxLol.jpg" alt="Jinx" />
      </div>
      <div>
        <img src={zed} alt="zedão" className="imagem" />
      </div>
      <div>
        <ManageData />
        <ListRender />
        <CondicionalRender />
        <ShowUserName name={name} />
        <CarDetaisl brand="Fiat" km="10000" color="Preto" newCar={false} />
        {/* Reaproveitando */}
        <CarDetaisl brand="chevrolet" km="15000" color="azul" newCar={false} />
        <CarDetaisl brand="ford" km="0" color="rosa" newCar={true} />
        {/* loop de array de objetos */}
        {cars.map((car) => (
          <CarDetaisl
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>
      {/* Fragment */}
      <Fragment propFragment={"mikael Almondes lindo"} />
      {/* children */}
      <Container myValue={"teste"}>
        <p>Este é o conteúdo</p>
      </Container>

      {/* execultar função */}
      <ExecuteFunction myFunction={showMenssage} />

      {/* state Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      {/* Desafio da seção */}
      <h2>Desafio Começa agora</h2>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.nome}
          job={user.trabalho}
          age={user.idade}
        />
      ))}

      {/* Desafio Feito por mim */}
      {persons.map((person) => (
        <Persons name={person.nome} job={person.profissao} age={person.idade} />
      ))}
    </div>
  );
}

export default App;

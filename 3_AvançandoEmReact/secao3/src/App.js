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

function App() {
  const name = "Mikael";

  const cars = [
    { id: 1, brand: "ferrari", color: "amarela", newCar: true, km: 0 },
    { id: 2, brand: "Fiat", color: "preta", newCar: false, km: 55522 },
    { id: 3, brand: "mizuno", color: "rosa", newCar: true, km: 0 },
    { id: 4, brand: "ponifice", color: "branco", newCar: false, km: 500 },
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
    </div>
  );
}

export default App;

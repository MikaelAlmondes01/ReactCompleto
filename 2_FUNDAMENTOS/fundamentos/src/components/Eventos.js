const Eventos = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("teste confirmado");
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!!</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou!!")}></button>
      </div>
    </div>
  );
};

export default Eventos;

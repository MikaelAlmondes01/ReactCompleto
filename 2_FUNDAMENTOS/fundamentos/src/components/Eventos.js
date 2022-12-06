const Eventos = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("teste confirmado");
  };

  const testeFunção = (x) => {
    if (x) {
      return <h1>Olá mikael</h1>;
    } else {
      return <h1>Olá mikael 2</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!!</button>
      </div>
      <div>
        <button onClick={() => console.log("clicou!!")}></button>
      </div>

      {testeFunção(true)}
      {testeFunção(false)}
    </div>
  );
};

export default Eventos;

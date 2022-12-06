const Challenge = () => {
  const a = 5;
  const b = 6;

  return (
    <div>
      <h1>Esse é o número da equação {a}</h1>
      <h1>Esse é o outro número da equação {b}</h1>
      <button
        onClick={() => {
          console.log(a + b);
        }}
      >
        Clique aqui
      </button>
    </div>
  );
};

export default Challenge;

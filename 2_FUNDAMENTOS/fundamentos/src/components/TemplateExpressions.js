const TemplateExpressions = () => {
  const name = "Mikael Almondes";
  const mikael = {
    idade: 23,
    trabalho: "Programador",
  };
  return (
    <div>
      <h1> Olá {name}, tudo bem com você?</h1>
      <p>
        A sua profissão é {mikael.trabalho} e sua idade {mikael.idade}, correto?
      </p>
    </div>
  );
};

export default TemplateExpressions;

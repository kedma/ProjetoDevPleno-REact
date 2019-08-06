import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//componente funcional
function App() {
  //Entrada, Rodando, Fim
  const [estado, setEstado] = useState("ENTRADA");

  //palpites
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proximoPalpite);
  };
  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proximoPalpite);
  };
  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente</button>
      </div>
    );
  }

  //0 a 300 chutes

  return (
    <div className="App">
      <h2>1º Projeto React - KedDev</h2>
      <p>O Seu palpite é {palpite}?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="KedDev" />, rootElement);

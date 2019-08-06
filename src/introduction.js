import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//JSX
const elemento = (
  <div>
    <h2>Olá DevKed!</h2>
  </div>
);

//Arrow function
const MostrarI = props => {
  return <p> Valor: {props.i}</p>;
};

//componente funcional
function App(props) {
  const [i, setI] = useState(1);

  const increment = () => {
    setI(i + 1);
  };
  return (
    <div className="App">
      <h1>
        Hello {props.name} {i}
      </h1>
      <button onClick={increment}>Incrementar</button>
      <MostrarI i={i} />
      {elemento}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="DevPleno" />, rootElement);

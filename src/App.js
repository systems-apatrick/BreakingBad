import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffff;
  margin-top: 3rem;
  padding: 3rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;
  :hover {
    cursor: pointer;
    background-size: 40px;
  }
`;

function App() {
  // state de frase
  const [frase, guardarFrase] = useState({});

  //

  // consultar en la api
  const consultaAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  // cargar un frase al inicio
  useEffect(() => {
    consultaAPI();
  }, []);
  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultaAPI}>Obtener Frase</Boton>;
    </Contenedor>
  );
}

export default App;

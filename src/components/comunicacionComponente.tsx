import React, { useState } from "react";

export function Padre(): JSX.Element {
  const [contador, setnewContador] = useState<number>(0);

  const incrementarContador = () => {
    setnewContador(contador + 1);
  };

  return (
    <>
      <h3>Comunicacion entre Componentes:</h3>
      <Hijo incrementarContador={incrementarContador} mensaje="Mensaje para el hijo 1" />
      <Hijo
        incrementarContador={incrementarContador}
        mensaje="Mensaje para el hijo 2 "
      />
      <h4>Contador Padre: {contador}</h4>
    </>
  );
}

function Hijo(props: any): JSX.Element {
  return (
    <>
      <h4>{props.mensaje}</h4>
      <button onClick={props.incrementarContador}>+</button>
      
    </>
  );
}

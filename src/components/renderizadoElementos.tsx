import React, { Component, useState } from "react";
import data from "../helpers/data.json";

interface IData {
  name: string;
  web: string;
}

function ElementoLista(props: IData) {
  return (
    <li>
      <a href={props.web}>{props.name}</a>
    </li>
  );
}

export function RenderizadoElementos(): JSX.Element {
  const [seasons, setnewSeasons] = useState<string[]>([
    "Primavera",
    "Verano",
    "Otono",
    "Invierno",
  ]);
  return (
    <div>
      <div>Renderizado de Elementos:</div>
      <h3>Estaciones del Anio</h3>
      <ol>
        {seasons.map((e) => (
          <li key={e.length}>{e}</li>
        ))}
      </ol>
      
      <h3>Frameworks Frontend JavaScript</h3>
      <ul>
        {data.frameworks.map((e) => (
          <ElementoLista name={e.name} web={e.web} key={e.id} />
        ))}
      </ul>
    </div>
  );
}

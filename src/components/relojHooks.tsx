import React, { useState, useEffect } from "react";

interface IData {
  hour: string;
}

function Reloj({ hour }: IData) {
  return <h3>{hour}</h3>;
}

export default function RelojHooks() {
  const [hour, setHour] = useState<string>(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    let temporizador: any;
    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
   
      clearInterval(temporizador);
    }
  }, [visible]);

  return (
    <>
      <h2>Reloj con Hooks</h2>
      {visible && <Reloj hour={hour} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </>
  );
}

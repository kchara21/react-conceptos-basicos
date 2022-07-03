import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState<number>(0);

  /* Se ejecuta cada que una variable de estado cambia*/
  useEffect(() => {
  

    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", detectarScroll);
  }, [scrollY]);

  /* Se ejecuta solo Una vez dejar vacio esa lista */
  useEffect(() => {
   
  }, []);

  /* Se ejecuta desuscribirme de servicios, desconectarme de API, limpiar intervalos de tiempo,manejadores de eventos  */
  useEffect(() => {
    return () => {

    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  );
}

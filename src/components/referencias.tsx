import React, { useState, useEffect, useRef } from "react";

export default function Referencias(): JSX.Element {
  // let refMenu = createRef() //Si es un class Component
  const refMenuBtn = useRef(null);
  const refMenu = useRef(null);

   // MANIPULAR ELEMENTOS DEL DOM CON REFERENCIAS
  const handleToggleMenu = (e:React.MouseEvent) => {
    if (refMenuBtn.current["textContent"] === "Menu") {
      refMenuBtn.current["textContent"] = "Revisar";
      refMenu.current["style"].display = "block";
    } else {
      refMenuBtn.current["textContent"] = "Menu";
      refMenu.current["style"].display = "none";
    }
    // MANIPULAR ELEMENTOS DEL DOM SIN REFERENCIAS
    //     const $menu:HTMLElement | null = document.getElementById("menu");

    //     if(e.target.textContent === 'Menu'){
    //         e.target.textContent = 'Cerrar';
    //         $menu!.style.display = 'block';
    //     }else{
    //         e.target.textContent = 'Menu';
    //         $menu!.style.display = 'none';
    //     }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button ref={refMenuBtn} id="menu-btn" onClick={handleToggleMenu}>
        Menu
      </button>
      <nav ref={refMenu} id="menu" style={{ display: "none" }}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
      </nav>
    </>
  );
}

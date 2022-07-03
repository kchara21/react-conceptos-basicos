import React, { useState } from "react";

type ReactMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export function Eventos(): JSX.Element {
  const [contador, setnewContador] = useState<number>(0);

  const sumar = ():void =>{
    setnewContador(contador + 1);
  }

  const restar = (): void =>{
    setnewContador(contador - 1);
  }

  return (
    <div>
      <h3>Eventos:</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
    </div>
  );
}


export function MasSobreEventos(): JSX.Element {
    const handleClick = (e:ReactMouseEvent,mensaje:string):void =>{
      
    }

   

    return (<div>
        <h3>Mas sobre Eventos</h3>
        <button onClick={(e)=>handleClick(e,"Pasando parametro")}>Saludar</button>
        <br />

      {/* EVENTO PERSONALIZADO EN COMPONENTE*/}
        <Boton MyOnClick={(e:ReactMouseEvent)=>handleClick(e,"Pasando parametro")}/>
    </div>)
}

const Boton = ({MyOnClick}:any):JSX.Element=>{
    return <button onClick={MyOnClick}>Boton hecho componente</button>
 }


// export function Boton(props:any): JSX.Element{
//     return (<button onClick={props.MyOnClick}>Boton hecho componente</button>)
// }




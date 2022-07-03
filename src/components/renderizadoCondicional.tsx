import React, {useState } from "react";

function Login():JSX.Element {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

function Logout():JSX.Element {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export function RenderizadoCondicional(): JSX.Element {

    const [session,setnewSession] = useState<boolean>(true)
     
  return (
    <div>
      <div>Renderizado Condicional:</div>
      {session ?<Login/> :<Logout/>}
    </div>
  );
}

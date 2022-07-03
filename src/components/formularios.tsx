import React, { useState, useEffect, useRef } from "react";

// export default function Formularios(): JSX.Element {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
//       e.preventDefault();
//       alert("El formulario se ha enviado!")
//   }

//   return (
//     <>
//       <h2>Formularios:</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="nombre">Nombre</label>
//         <input
//           type="text"
//           id="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />

//         <p>Elige tu Sabor JS Favorito</p>

//         <input
//           defaultChecked
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vanilla">Vanilla</label>

//         <input
//           type="radio"
//           id="react"
//           name="sabor"
//           value="react"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="react">React</label>

//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="angular">Angular</label>

//         <input
//           type="radio"
//           id="vue"
//           name="sabor"
//           value="vue"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="vue">Vue</label>

//         <input
//           type="radio"
//           id="svelte"
//           name="sabor"
//           value="svelte"
//           onChange={(e) => setSabor(e.target.value)}
//         />
//         <label htmlFor="svelte">Svelte</label>

//         <p>Elige tu lenguaje de programacion favorito</p>
//         <select
//           defaultValue=""
//           name="lenguaje"
//           onChange={(e) => setLenguaje(e.target.value)}
//         >
//           <option value="">----</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//           </select>
//           <br />
//           <label htmlFor="terminos">Acepto terminos y Condiciones</label>
//           <input
//             type="checkbox"
//             id="terminos"
//             name="terminos"
//             onChange={(e) => setTerminos(e.target.checked)}
//           />
//           <br />
//           <input type="submit" />
//       </form>
//     </>
//   );
// }

interface IData {
  nombre: string ;
}

export default function Formularios(): JSX.Element {
  const [form, setForm] = useState<IData>({nombre:""});

  const handleChange = (e: {target:HTMLSelectElement} | {target:HTMLInputElement}) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e: {target:HTMLInputElement}) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("El formulario se ha enviado!");
  };

  return (
    <>
      <h2>Formularios:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />

        <p>Elige tu Sabor JS Favorito</p>

        <input
          defaultChecked
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>

        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>

        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>

        <input
          type="radio"
          id="svelte"
          name="sabor"
          value="svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>

        <p>Elige tu lenguaje de programacion favorito</p>
        <select defaultValue="" name="lenguaje" onChange={handleChange}>
          <option value="">----</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y Condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

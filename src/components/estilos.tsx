import React from 'react'
import "./estilos.css"
import "./estilos.scss"
import moduleStyles from "./estilos.module.css"

export default function Estilos(){

    let myStyles = {
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%",
    }

    return (
        <section className='estilos'>
            <h2>Estilos CSS en React</h2>
            <h3 className='bg-react'>Estilos en hoja CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem",margin:"1rem"}}>Estilos en linea (atributo style)</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en linea</h3>
            <h3 className='bg-react' >Agregando Normalize con <br/><code>@import-normalize;</code></h3>
            <h3 className={moduleStyles.error}>Estilos con Modulos</h3>
            <h3 className={moduleStyles.sucess}>Estilos con Modulos</h3>

            {/* Estilos SCSS CON NPM i node-saas*/}
            <h3 className="bg-saas">Estilos con SAAS</h3>

        </section>
    )
}
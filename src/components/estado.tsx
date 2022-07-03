import React, {Component, useState} from 'react';


export function Estado():JSX.Element {

    const [contador,setnewContador] = useState<number>(0)

        
        // setInterval(()=>{
        //     setnewContador(contador+1)
        // },2000);
    

    return(
        <div>
            <div>The State</div>
            <p>{contador}</p>
        </div>
        
    )



}
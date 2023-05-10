import React from 'react'
const Contador = () => {
    const [contador,setContador]=React.useState(0) 
    const aumentar=()=>{
        setContador(contador+1)
    }   
    const disminuir=()=>{
    setContador(contador-1)
    }

    const reiniciar=()=> {
        setContador(0)
    }
    return (
        <div>
        <hr />
        <h2>Ejemplo contador</h2>
        <h3>Contador: {contador}</h3>
        <h2>
            {
                contador%2===0 ? "Es Par" : "Es impar"
            }
        </h2>
        <button onClick={()=>aumentar()}>Aumentar</button>
        <button onClick={()=>disminuir()}>Disminuir</button>
        <button onClick={()=>reiniciar()}>Reiniciar</button>
        </div>
    )
}

export default Contador
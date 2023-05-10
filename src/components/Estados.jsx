import React, { useState } from 'react'

const Estados = () => {
    const [texto,setTexto]=useState("texto inicial desde estado")
    const modificar = ()=> {
        setTexto("texto modificado desde estado")
    }
  return (
    <div>
        <h2>Estados</h2>
        <h3>{texto}</h3>
        <button onClick={modificar}>Modificar</button>    
    </div>

    
  )
}

export default Estados
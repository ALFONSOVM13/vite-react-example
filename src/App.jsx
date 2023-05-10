import { useState } from 'react'
import './App.css'
import Compclase from './components/Compclase'
import Compfuncion from './components/Compfuncion'
import Parrafo from './components/Parrafo'
import Variables from './components/Variables'
import  Eventos from './components/eventos'
import Estados from './components/Estados'
import Contador from './components/Contador'
import Listas from './components/Listas'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)
  const style="active"
  const contenido="Desarrollo web I"
  return (
    <>
      <Formulario></Formulario>
      <hr />
      <h1>hola mundo</h1>
      <div className={style}>{contenido}</div>
      <Compclase></Compclase>
      <hr />
      <Compclase/>
      <hr />
      <Compfuncion/>
      <hr />
      <Parrafo/>
      <hr />
      <Variables/>
      <Variables/>
      <Variables/>
      <Variables/>
      <hr />
      <Eventos></Eventos>
      <hr />
      <Estados></Estados>
      <hr />
      <Contador></Contador>
      <hr />
      <Listas></Listas>
      
    </>
    
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [textoDigitado, setTextoDigitado] = useState("informação no state")

  const handleText = () => {
    console.log('Passar o texto digitado')
  }

  const handleTextoDigitado = (texto) => {
    setTextoDigitado(texto.target.value)
  }

  return (
    <>
      <h1>Inputs Controlados</h1>
      <h2>Informação Digitada: {textoDigitado}</h2>
      {/* <input type="text" placeholder='Digite aqui' onChange={e => setTextoDigitado(e.target.value)}/> */}
      <input type="text" placeholder='Digite aqui' onChange={handleTextoDigitado} value={textoDigitado}/>
      <button onClick={handleText}>Enviar</button>
    </>
  )
}

export default App

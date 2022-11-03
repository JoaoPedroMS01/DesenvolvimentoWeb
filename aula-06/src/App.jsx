import { useState, useEffect } from 'react'
import './App.css'
import api from './services/api'

function App() {
  const [cats, setCats] = useState([])

  const getCat = async() => {
    const {data} = await api.get('/images/search')
    console.log(data)
  }
  
  //Só é executado após o componente ser renderizado
  useEffect(() => {
    getCat()
  }, [])

  return (
    <>
      <h1>Use Effect</h1>
      <button onClick={() => setNome('OutroNome')}>Trocar Nome</button>
      <button onClick={() => setIdade(idade + 1)}>Incrementar Idade</button>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import Contatos from '../pages/Contatos/Index'
import { Galeria } from '../pages/Galeria'
import ContatoDetalhes from '../pages/ContatoDetalhes'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/galeria' element={<Galeria/>}/>
      <Route path='/contatos' element={<Contatos/>}/>
      <Route path='/contatos/:id' element={<ContatoDetalhes/>}/>

      <Route path='*' element={<h1>Erro 404 - Página não encontrada</h1>}/>
    </Routes>
  )
}

export default App

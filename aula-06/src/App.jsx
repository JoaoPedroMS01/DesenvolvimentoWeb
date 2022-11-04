import './App.css'
import MostrarImg from './components/MostrarImg'

function App() {
  
  //Só é executado após o componente ser renderizado
  

  //Função assíncrona dentro do useEffect
  // useEffect(() => {
  //   const getCat = async() => {
  //     const {data} = await api.get('/images/search')
  //     console.log(data)
  //   }
  //   getCat()
  // }, [])

  return (
    <>
      <h1>Use Effect</h1>
      <MostrarImg/>
    </>
  )
}

export default App

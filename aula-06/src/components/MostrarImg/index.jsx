import api from "../../services/api"
import { useState, useEffect } from "react"

const MostrarImg = () => {
    const [cat, setCat] = useState([])

    const getCat = async() => {
        const {data} = await api.get('/images/search')
        setCat(data)
        console.log(data)
      }

      useEffect(() => {
        getCat()
      }, [])

    return (
    <>
      <h1>{cat.length > 0 && cat[0].url}</h1>
      {cat.length > 0 ? 
        <img src={cat[0].url} alt="Gatinho" /> :
        <h1>Sem imagem no momento</h1>
      }
      <div>
      <button onClick={() => getCat()}>Mudar Imagem</button>
      </div>
    </>
    )
}

export default MostrarImg
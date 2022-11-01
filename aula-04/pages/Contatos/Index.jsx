import { Link } from "react-router-dom"

const Contatos = () => {
    
    const contato = {
        id: 1,
        nome: 'João Pedro',
        email: 'joao@email.com'
    }

    console.log(contato.nome)

    return (
        <>
            {/* <a href="/contatos">CONTATOS</a> */}
            <h1>CONTATOS</h1>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/galeria'>GALERIA</Link></li>
            </ul>
            <ol>
                <li><Link to={`/contatos/${contato.id}`} state={{data: contato}}>Contato João Pedro</Link></li>
                <li><Link to='/contatos/2'>Contato Clara</Link></li>
                <li><Link to='/contatos/3'>Contato Matheus</Link></li>
            </ol>
        </>
    )
}

export default Contatos
import { Link } from "react-router-dom"

const Contatos = () => {
    
    const contato = {
        id: 1,
        nome: 'João Pedro',
        email: 'joao@email.com'
    }

    const contato2 = {
        id: 2,
        nome: 'Clara',
        email: 'clara@gmail.com'
    }

    return (
        <>
            {/* <a href="/contatos">CONTATOS</a> */}
            <h1>CONTATOS</h1>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/galeria'>GALERIA</Link></li>
            </ul>
            <ol>
                <li><Link to={`/contatos/${contato.id}`} state={{nome: contato.nome, id: contato.id}}>Contato João Pedro</Link></li>
                <li><Link to={`/contatos/${contato2.id}`} state={{nome: contato2.nome, id: contato2.id}}>Contato Clara</Link></li>
                <li><Link to='/contatos/3'>Contato Matheus</Link></li>
            </ol>
        </>
    )
}

export default Contatos
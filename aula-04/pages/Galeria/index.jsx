import { Link } from "react-router-dom"

export const Galeria = () => {
    return (
        <>
            {/* <a href="/contatos">CONTATOS</a> */}
            <h1>GALERIA</h1>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/contatos'>CONTATOS</Link></li>
            </ul>
        </>
    )
}

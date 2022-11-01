import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            {/* <a href="/contatos">CONTATOS</a> */}
            <h1>HOME</h1>
            <ul>
                <li><Link to='/contatos'>CONTATOS</Link></li>
                <li><Link to='/galeria'>GALERIA</Link></li>
            </ul>
        </>
    )
}

export default Home
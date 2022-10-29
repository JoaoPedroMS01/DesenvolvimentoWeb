import './style.css'
import { useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    const handleLogin = () => {
        console.log("Login: ", login)
        console.log("Senha: ", senha)
    }

    return (
        <>
            <h1>Faça seu Login</h1>
            <h2>Login</h2>
            <input type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder='Digite seu User'/>

            <h2>Senha</h2>
            <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder='Digite sua senha'/>

            <div style={{marginTop: 20}}>
                <input type="button" value="ENTRAR" onClick={handleLogin}/>
            </div>
        </>
    )
}

export default Login
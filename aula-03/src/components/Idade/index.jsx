import { useState } from "react"

const Idade = () => {
   const [nome, setNome] = useState('')
   const [idade, setIdade] = useState('')
   const [message, setMessage] = useState('')

   const handleMessage = () => {
        if (idade >= 18) {          
            setMessage("Olá " + nome + ", você é maior de idade.")
        } else {
            setMessage("Olá " + nome +", você é menor de idade.")
        }
   }

    return (
        <>
            <h1>{message}</h1>
            <input type="text" onChange={e => setNome(e.target.value)} placeholder="Digite seu nome"/>
            <input type="number" onChange={e => setIdade(e.target.value)} placeholder="Digite sua idade"/>
            <input type="button" value='Enviar' onClick={handleMessage}/>
        </>
    )
}

export default Idade

//Criar um novo componente e importar main.jsx
//Criar um input para salvar o nome da pessoa
//Criar um input para salvar a idade da pessoa
//Criar um botão para executar uma função
//A Função deve verificar se a idade da pessoa é menor que 18 anos ou maior
//Mostrar na tela: "Olá fulano, você é menor/ou maior de idade";
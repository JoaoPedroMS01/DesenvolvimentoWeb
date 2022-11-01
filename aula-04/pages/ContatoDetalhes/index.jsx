import { useParams, useLocation } from "react-router-dom"

const ContatoDetalhes = () => {
    const {id} = useParams()
    const {state} = useLocation()

    console.log(state.data)

    const renderizaNome = () => {
        switch(id) {
            case '1':
                return 'João Pedro'
            case '2': 
                return 'Clara'
            case '3':
                return 'Matheus'
            default:
                return 'DESCONHECIDO'
        }
    }

    if (id == '1') {
        return <h1>Contato: João Pedro que veio do if</h1>
    } 
    
    return (
    <h1>
        {id == '2' && 'Contato: Clara que veio do &&'}
        {/* Contato: {renderizaNome()} */}

        {/* Renderização condicional com operador ternário. */}
        {id == 3 ? 'Contato: Matheus do operador ternário' : null}
    </h1>
    )
}

export default ContatoDetalhes
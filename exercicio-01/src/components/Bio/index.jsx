import './style.css'

function Bio(props) {
    return (
        <div className='bio'>
            <h2>{props.nome}</h2>
            <button>Saiba mais</button>
        </div>
    )
}

export default Bio
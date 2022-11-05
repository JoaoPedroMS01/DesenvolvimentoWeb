import Card from 'react-bootstrap/Card'

const CardTask = ({task}) => {
    return (
        <Card className='mb-2'>
            <Card.Header as='h5'>{task.titulo}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {task.descricao}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardTask
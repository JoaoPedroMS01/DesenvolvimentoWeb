import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const CardTask = ({task, deleteTask}) => {
    return (
        <Card className='mb-2'>
            <Card.Header as='h5'>{task.titulo}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {task.descricao}
                </Card.Text>
                <Button onClick={() => deleteTask(task.id)}>Excluir</Button>
                <Button className='ms-3'>Editar</Button>
            </Card.Body>
        </Card>
    )
}

export default CardTask
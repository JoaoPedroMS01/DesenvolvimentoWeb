import { useState } from 'react'
import './App.css'
import CardTask from './components/Card'
import { FaLinkedin, FaReact } from 'react-icons/fa'
import { Button, Container, Row, Col, Form, Stack } from 'react-bootstrap'

const tasks = [
  {
    id: 1,
    titulo: 'Primeira Task',
    descricao: 'Descrição da primeira task',
    propriedade: 'URGENTE'
  },
  {
    id: 2,
    titulo: 'Segunda Task',
    descricao: 'Descrição da segunda task',
    propriedade: 'URGENTE'
  },
  {
    id: 3,
    titulo: 'Terceira Task',
    descricao: 'Descrição da terceira task',
    propriedade: 'URGENTE'
  }
]

function App() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prioridade, setPrioridade] = useState('')
    const [id, setId] = useState(3)
    const [taskList, setTaskList] = useState(tasks)

  const handleTask = () => {
    if (titulo == '' || prioridade == '' || descricao == '') {
      alert('Preencha todos os campos')
      return
    }
    const newTask = {
      id: id + 1,
      titulo: titulo,
      descricao: descricao,
      prioridade: prioridade
    }

    // api.post('/tasks', newTask)

    //Devemos sempre atualizar o state para evitar problemas de renderização
    // tasks.push(newTask)
    setTaskList([...taskList, newTask])

    setId(id + 1)
    setTitulo('')
    setDescricao('')
    setPrioridade('')
  }

  return (
    <>
    <Container className='bg-secondary'>
        <h1 className='text-center'>Lista de Tarefas</h1>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Insira o título" onChange={e => setTitulo(e.target.value)} value={titulo}/>
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={e => setPrioridade(e.target.value)} value={prioridade}>
          <option>Escolha a prioridade</option>
          <option value="baixa">Baixa</option>
          <option value="normal">Normal</option>
          <option value="urgente">Urgente</option>
      </Form.Select>
        <Form.Group className="mb-3" >
          <Form.Label>Descrição</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={e => setDescricao(e.target.value)} value={descricao}/>
        </Form.Group>
        <Stack>
          <Button className='float-end' onClick={() => {handleTask()}}>Cadastrar nova tarefa</Button>
        </Stack>
      </Form>

      <Stack>
        {taskList.map(item => {
          return <CardTask key={item.id} task={item}/>
        })}
      </Stack>
    </Container>
    </>
  )
}

export default App
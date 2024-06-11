import styles from './tarefas.module.css'
import {Link} from 'react-router-dom'
import { Input, Stack } from '@chakra-ui/react'
import { Checkbox } from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'

export default function Tarefas() {
    return (
        <>
            <h1>Lista de Tarefas</h1>
            <h3>Inserir nova tarefa</h3>
            <Input className={styles.tarefas} placeholder='Digite o título da task' />
            <Checkbox defaultChecked>Realizada?</Checkbox>
            <Button colorScheme='blue' size='sm'>Inserir</Button>
            <div>Tarefa 1
                <Stack direction='row' spacing={4}>
                <Button colorScheme='red'>
                    Pendente
                </Button>
                <Button colorScheme='red'>
                    Excluir
                </Button>
                </Stack>
            </div>
            <div>Tarefa 2
                <Stack direction='row' spacing={4}>
                <Button colorScheme='red'>
                    Pendente
                </Button>
                <Button colorScheme='red'>
                    Excluir
                </Button>
                </Stack></div>
            <div>Tarefa 3
                <Stack direction='row' spacing={4}>
                <Button colorScheme='red'>
                    Pendente
                </Button>
                <Button colorScheme='red'>
                    Excluir
                </Button>
                </Stack></div>
            <Link to="/">Página Inicial</Link>        
        </>
    )
}
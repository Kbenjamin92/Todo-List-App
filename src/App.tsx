import './App.css'
import { Header } from './components/Header'
import { Grid, GridItem } from '@chakra-ui/react'
import { TodoForm } from './components/TodoForm'
import { useState } from 'react'
import { Todo } from './interfaces'
import { TodoList } from './components/TodoList'


// Figure out a way to manage the list of todos with unique IDS 
const App = () => {
  const [todos, setTodo] = useState<Todo>();

  return (
    <>
    <Grid
    templateAreas={{
      base:`"header"
            "aside"
            "main"
            "footer"`,
      sm:`"header"
          "main"
          "footer",`,
      md:`"header header"
          "aside main"
          "footer footer"`,
      lg: `"header header"
            "aside main"
            "footer footer",`}}
    h='500px'
    gridTemplateRows='repeat(3, 1fr)'
    templateColumns={{
      base:'repeat(1, 1fr)',
      md: 'repeat(2, 1fr)'
    }}
    gap={1}>
      <GridItem area={'header'}>
        <Header />
      </GridItem>
      <GridItem area={'aside'}>
        <TodoForm setTodo={setTodo}/>
      </GridItem>
      <GridItem area={'main'}>
        <TodoList todos={todos} />
      </GridItem>
      <GridItem area={'footer'}>
        <h1>Footer</h1>
      </GridItem>
    </Grid>
    </>
  )
}

export default App

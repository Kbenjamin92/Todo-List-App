import { Todo } from '../interfaces'
import { Box, Text } from '@chakra-ui/react'

interface TodoProps {
    todos: Todo | undefined
}

/* 
Add a card component to this 
component to display a card with 
the todd data and a button to delete 
and update the todo
*/

export const TodoList = ({ todos }: TodoProps) => {
  return (
    <>
     <Box>
        <Text>{todos?.title}</Text>
        <Text>{todos?.description}</Text>
     </Box>
    </>
  )
}


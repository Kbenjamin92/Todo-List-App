import { Todo } from '../interfaces'
import { Box, Text } from '@chakra-ui/react'

interface TodoProps {
    todos: Todo | undefined
}

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


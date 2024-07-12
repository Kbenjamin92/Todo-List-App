import { Input, Button } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


interface Todo {
  id: number
  title: string;
  description: string
}

const TodoForm: React.FC = () => {
  const [todo, setTodo] = useState<Todo>();
  const { 
    register, 
    handleSubmit, 
    reset,
    setValue } = useForm<Todo>();

  const onSubmit = (data: Todo) => {
    setTodo(data)
    reset()
  }

  const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue(name as keyof Todo, value)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={5}>
        <Input 
          {...register('title', {
            required: true
          })}
          name='title'
          onChange={handleChange}
          variant='flushed' 
          placeholder='Title...'/>
        <Input 
          {...register('description', {
            required: true
          })}
          name='description'
          onChange={handleChange}
          variant='flushed' 
          placeholder='Description...'/>
        <Button  
          alignSelf='flex-start' 
          colorScheme='blue'
          type='submit'>Add</Button>
      </VStack>
    </form>
    </>
  )
}

export default TodoForm

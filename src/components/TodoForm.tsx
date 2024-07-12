import { Input, Button } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Todo } from '../interfaces'

interface Props {
  setTodo: React.Dispatch<React.SetStateAction<Todo | undefined>>;
}

export const TodoForm = ({ setTodo }: Props) => {
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
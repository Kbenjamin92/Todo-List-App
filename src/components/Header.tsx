import { Heading } from "@chakra-ui/react"

export const Header = () => {
  return (
    <>
      <Heading 
        as='h1' 
        size={{
        base: 'xl',
        sm: '2xl',
        md: '3xl',
        lg: '4xl'
      }}
      >
         List Helper
      </Heading>
    </>
  )
}


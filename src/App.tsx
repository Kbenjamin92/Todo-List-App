import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'

function App() {
  
  return (
    <>
    <Grid
    templateAreas={`"header"
                    "main"
                    "footer"`}
    h='500px'
    gridTemplateRows='repeat(3, 1fr)'
    gridTemplateColumns='repeat(1, 1fr)'
    gap={1}>
      <GridItem area={'header'}>
        <h1>Hello React</h1>
      </GridItem>
      <GridItem area={'main'}>
        <h1>Hello React</h1>
      </GridItem>
      <GridItem area={'footer'}>
        <h1>Hello React</h1>
      </GridItem>

    </Grid>
    </>
  )
}

export default App

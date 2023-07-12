import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { ChakraProvider, Card, CardHeader, CardBody,Stack ,Input, Box, Spacer } from '@chakra-ui/react'
import { Button } from '@rewind-ui/core';

const defaultTodos =[
  {id:1,text:'Prueba ', completed:true},
  {id:2,text:'Prueba', completed:false},
]
function App() {
  return (
    <ChakraProvider >
      <Spacer/>
      <Box p={10}  display={{base: 'block', md:'flex'  }} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>   
            <Box padding='1'>
              <Card >
                <CardBody >
                  <CreateTodoButton  Button={Button} Input={Input}/>
                </CardBody>
              </Card>
            </Box >
            <Box padding='10' mt={{ base: 4, md: 4 }} ml={{ md: 6 }}>
              <Card >
                <CardHeader>
                  <TodoCounter  total={2}/>
                </CardHeader>
                <CardBody>
                  <TodoSearch Input={Input}/>
                  <TodoList >
                  <Stack>
                    {defaultTodos.map(todo =>
                    <Card key={todo.text}>
                      <CardBody>
                        <TodoItem id={todo.id} text={todo.text} state={todo.completed} />
                      </CardBody>
                    </Card>
                      )}
                    </Stack>
                  </TodoList>
                </CardBody>
              </Card>
            </Box>   
       </Box >
    </ChakraProvider>
  );
}


export default App;

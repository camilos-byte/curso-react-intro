import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { ChakraProvider, Card, CardHeader, CardBody,Stack ,Input, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from "@chakra-ui/icons";
import { Button } from '@rewind-ui/core';

const defaultTodos =[
  {id:1,text:'Cortar cabello ', completed:true},
  {id:2,text:'Tomar curso react', completed:false},
  {id:3,text:'LLorar con la LLorona ', completed:true},
]
function App() {
  return (
    <ChakraProvider>
     <Card align='center'>
      <CardHeader>
        <TodoCounter
        completed={16} total={25}
        />
      </CardHeader>
      <CardBody>
        <div className='flex items-center' >
        <TodoSearch Input={Input}/>
        <CreateTodoButton Button={Button}/>
        </div>
        <TodoList >
          <Stack mt='2' spacing='3'>
            {defaultTodos.map(todo =>
            <Card key={todo.text}>
              <CardBody>
                <TodoItem key={todo.id} text={todo.text} state={todo.completed} IconButton={IconButton} DeleteIcon={DeleteIcon}/>
              </CardBody>
            </Card>
              )}
          </Stack>
        </TodoList>
      </CardBody>
     </Card>
    </ChakraProvider>
  );
}


export default App;

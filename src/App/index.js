import React from "react";
import { TodoCounter } from '../componentes/TodoCounter';
import { TodoSearch } from '../componentes/TodoSearch';
import { TodoList } from '../componentes/TodoList';
import { TodoItem } from '../componentes/TodoItem';
import { TodosLoading } from '../componentes/TodosLoading';
import { TodosError } from '../componentes/TodosError';
import { EmptyTodos } from '../componentes/EmptyTodos';
import { CreateTodoButton } from '../componentes/CreateTodoButton';
import {useLocalStorage} from './useLocalStorage'   
import { ChakraProvider, Card, CardHeader, CardBody,Stack ,Input, Box, Spacer } from '@chakra-ui/react'
import { Button } from '@rewind-ui/core';



function App() {
  const {item:todos,
     saveItem:saveTodos,
      loading,
       error
      } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter (
    (todo) => { 
    return todo.text.includes(searchValue);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
   const todoIndex =  newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed === true
    ? (newTodos[todoIndex].completed = false)
    : (newTodos[todoIndex].completed = true);
    saveTodos(newTodos);
  }
  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
   const todoIndex =  newTodos.findIndex((todo) => todo.text === text);
newTodos.splice(todoIndex, 1)
saveTodos(newTodos);
  }

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
                  <TodoCounter completed= {completedTodos} total ={totalTodos} />
                  </CardHeader>
                  <CardBody>
                  <TodoSearch Input={Input} searchValue ={searchValue} setSearchValue ={setSearchValue} />
                    <TodoList >
                  {loading && (
                    <>
                      <TodosLoading/>
                    </>
                  )}
                  {error && <TodosError/>}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodos/> }
                    <Stack>
                      {searchedTodos.map(todo =>
                      <Card key={todo.text}>
                        <CardBody>
                          <TodoItem 
                          key={todo.text} 
                          text={todo.text} 
                          completed={todo.completed}
                          onComplete={ ()=>completeTodo (todo.text)}
                          onDelete={ ()=>deleteTodo (todo.text)}
                          />
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

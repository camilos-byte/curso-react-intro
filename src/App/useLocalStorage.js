import React from "react";

function useLocalStorage(itemName,initialValue) {

    let parsedItem;
    const localStorageTodos = localStorage.getItem(itemName);
  
    if (!localStorageTodos) {
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem =[];
    } else {
      parsedItem  = JSON.parse(localStorageTodos);
    }
    const [item, setItem] = React.useState(parsedItem);
    const saveItem =(newTodos) =>{
      localStorage.setItem('TODOS_V1',JSON.stringify(newTodos))
      setItem(newTodos)
    }
    return [item,saveItem];
  }

  export {useLocalStorage}
function TodoList(props) {
    return (
       <ul className="px-6 py-4">
            {props.children}
       </ul> 
    );
  }

  export {TodoList}; 
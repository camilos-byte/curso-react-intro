

function TodoCounter(props) {
    return (
        <div className="mb-1">
            
            <div  className=" flex justify-center">
                <h1 className=" font-bold text-4xl">
                    Tareas
                </h1>
            </div>
            <div className=" flex justify-center">
                
                <h1 className=" font-bold">    
                {props.completed ===  props.total  ?
                    'Completas' : 
                    'Completadas ' + props.completed + ' de '+ props.total}
                </h1>
            </div>
        </div>
    );
  }

  export {TodoCounter}; 
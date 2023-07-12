

function TodoCounter({total, liked}) {
    return (
        <div className="mb-1">
            <div  className=" flex justify-center">
                <h1 className=" font-bold text-4xl">
                    Tareas
                </h1>
            </div>
            <div className=" flex justify-center">
                <h1 className=" font-bold">
                Completadas {liked} de {total} 
                </h1>
            </div>
        </div>
    );
  }

  export {TodoCounter}; 
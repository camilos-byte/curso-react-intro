

function TodoCounter({total, completed}) {
    return (
        <div className="mb-1">
            <h1 className="px-6 py-2 font-bold text-xl mb-2">
                Has completado {completed} de {total} TODOS
            </h1>
        </div>
    );
  }

  export {TodoCounter}; 
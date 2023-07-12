import { useState } from 'react';
import { ButtonGroup } from "@chakra-ui/react" 
import imagen from './imagen2.png'

function CreateTodoButton({Button,Input}) {
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([]);

    async function clic(e) {
        e.preventDefault ();
        //Ahora leemos los datos del formulario 
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        if (formJson.task !== '') {
            setTodos([...todos,{ id: todos.length,text: formJson.task}])   
        } else {
            console.log('HOLA PERAAA');
        }

      console.log(todos); 
    }

    return (
        <div className="flex flex-col ">
            <div  className=" flex justify-center">
                <h1 className=" font-bold text-4xl mb-4">
                    Crear Tareas
                </h1>
            </div>
            <label className="font-bold">Nueva Tarea</label>
                    <form method="post" onSubmit={clic}>
                <ButtonGroup >
                        <Input name='task'  value={name}  onChange={ e => {setName(e.target.value)}}/>
                        <Button type="submit"  variant="bg-transparent hover:bg-blue-500 text-blue-700 font-bold hover:text-white border border-blue-500 hover:border-transparent rounded">
                            Agregar
                        </Button>
                </ButtonGroup>
                <p>Escribiste: {name}</p>
                    </form>
                <img src={imagen} alt="" width='170px' className="mx-auto mt-7 mb-2" />
        </div>
    )


}

export {CreateTodoButton}


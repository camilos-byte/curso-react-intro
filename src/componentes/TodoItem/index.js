import {Button,Checkbox,Spacer, Stack} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
function TodoItem(props) {
    return (
        <ul  className=" font-medium ">
                <Stack spacing={[ 10]} direction={['column', 'row']}>
                    <Checkbox size='md' colorScheme='green' 
                       isChecked = {props.completed} 
                        onChange={props.onComplete}>
                        {props.text}
                    </Checkbox>
                    <Spacer />
                    <Button onClick={props.onDelete} colorScheme='red' className="row-start-1 row-end-4"  variant='solid'>{<DeleteIcon/>}</Button>
                </Stack>
                <p>{props.completed ? 'Te gustó esto.' : '  '} </p>     
        </ul>
    );
  }

  export{TodoItem}
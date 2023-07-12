import {Button,Checkbox,Spacer, Stack} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState } from 'react';
function TodoItem({text, state,id}) {
    const [liked, setLiked] = useState(false);
    return (
        <ul  className=" font-medium ">
                <Stack spacing={[ 10]} direction={['column', 'row']}>
                    <Checkbox size='md'  checked={liked} colorScheme='green'  onChange={e =>{setLiked(e.target.checked)}}>
                        {text} {id}
                    </Checkbox>
                    <Spacer />
                    <Button colorScheme='red' className="row-start-1 row-end-4"  variant='solid'>{<DeleteIcon/>}</Button>
                </Stack>
                <p>{liked ? 'Te gustó esto.' : '  '} </p>     
        </ul>
    );
  }

  export{TodoItem}
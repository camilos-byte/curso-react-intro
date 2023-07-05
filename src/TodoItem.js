import {RadioGroup,Radio } from "@chakra-ui/react";
import React,{useState} from 'react';

function TodoItem({text, state,IconButton,DeleteIcon,key}) {
    const [value,setValue] = React.useState(key);
    return (
        <ul  className="px-2 py-3 font-medium text-gray-900">
                <RadioGroup onChange={setValue} value={value}>
                    <Radio value={key}>
                        <li className="flex items-center " >
                            {text}
                            <p className=""> {state} </p>
                            <div>
                                <IconButton position='right'  colorScheme='red' icon={<DeleteIcon/>}/>
                            </div>
                        </li>
                    </Radio>
                </RadioGroup>
        </ul>
    );
  }

  export{TodoItem}
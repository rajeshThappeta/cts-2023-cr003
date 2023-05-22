import {useState} from 'react';
import { todoContextObj } from './todoContext';

function Store({children}){

    //global state
    let [todos,setToDos]=useState([]);

    return(
        <todoContextObj.Provider value={[todos,setToDos]}>
            {children}
        </todoContextObj.Provider>
    )
}


export default Store;
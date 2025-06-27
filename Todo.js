import { useState } from "react";
import'./Todo.css'
const Todo=({title,isDone})=>{
    const [isdone, setIsdone] = useState(isDone);
const cliq=()=>{setIsdone(!isdone);

}

    return(
    <>
    

    <div className="todo">
    <h3>Todo:  </h3>
    <h3 style={{color:isdone?'green':'red' }}> {title}</h3>
    <h3>Statut:</h3>
    <h3 style={{color:isdone?'green':'red' }}>  {isdone?'Done':'Not Done'}</h3>
   
    <button className="done" style={{display:isdone?'none':'block'}} onClick={()=>cliq()}>Done</button>
    <button className="done" style={{display:isdone?'block':'none'}} >Delete</button>

</div>
 
    </>
    
    )
    
    }
    export default Todo


import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import './AddTodo.css'
const AddTodo = ({ add }) => {

    const [message, setMessage] = useState('');
   
    const job = { title: message, id:uuidv4(), isDone: false }
    return (
        <>
            <h2>Add a Job to do</h2>
            <div className="add">
                <input placeholder="add your task here" onChange={(e)=>{setMessage(e.target.value)}} value={message}  type="text" id="fname" name="fname" /><br />
                <button onClick={() => message !== '' ? add(job) & setMessage('') : alert('no tasks')} >Add Task</button>
               
            </div>
        </>
    )
}
export default AddTodo
import Todo from "./Todo"
import './ListTodo.css'
const ListTodo=({jobs})=>{
    let test=false;
return(<>

{jobs.length!==0? test=!test:test}

<div className="list">
    {test?
jobs.map((job)=><Todo title={job.title} isDone={job.isDone} />):<h1>NO TASKS</h1>}
</div>
</>

)

}
export default ListTodo
import ListTodo from './comp/ListTodo';
import AddTodo from './comp/AddTodo';
import { useState } from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'

function App() {
  const [jobs, setJobs] = useState([
    
  ]);

  const add=(job)=>setJobs([...jobs,job])
  return (<>  <ul className='nav'>
  <li><Link to='/add'>ADD</Link></li>
  <li><Link to='/list'>LIST</Link></li>
</ul>
    <div className="App">
     

      <Routes>
    <Route path='/add' element={ <AddTodo add={add}/>}/>
    <Route path='/list' element={  <ListTodo jobs={jobs} />}/>
   </ Routes>
    </div>
    </>
  );
}

export default App;

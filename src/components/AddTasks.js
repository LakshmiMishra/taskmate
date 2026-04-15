import React from 'react'
import { useState } from 'react'
import './AddTasks.css'

export default function AddTasks({tasks, setTasks}) {
  const [task,setTask]=useState('');
  const [status,setStatus]=useState(false);

 const handleInput= (e)=>{
    setTask(e.target.value);
  }
  const handleReset=()=>{
     setTask('');
     setStatus(false);
  }
 const handleSubmit=(e)=>{
    
      e.preventDefault();
      const newTask={
        id:Math.floor(Math.random()*1000),
        name:task,  
        completed:Boolean(status)
      }
      console.log(newTask);
      setTasks([...tasks,newTask]);
      handleReset();
    }
    const handleStatusChange=(e)=>{
      setStatus(e.target.value );
          }
  return (
   <section className='addtask'>
    <h2>Add Tasks</h2>
    <form onSubmit={handleSubmit}>
    <label htmlFor="taskName">Task Name:</label>
        <input onChange={handleInput}  type="text" value={task} name="task" id="task" placeholder='Task Name' autoComplete='off'/>
        <select onChange={handleStatusChange} value={status}>
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
         </select>
      <span onClick={handleReset} className='reset'>Reset</span>
        <button type='submit'>Add Task</button>
     
     
    </form>
   </section>
  )
}

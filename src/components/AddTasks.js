import React from 'react'
import './AddTasks.css'

export default function AddTasks() {
  return (
   <section className='addtask'>
    <h2>Add Tasks</h2>
    <form>
    <label htmlFor="taskName">Task Name:</label>
       <input type="text" name="task" id="task" placeholder='Task Name' autoComplete='off'/>
        <button type='submit'>Add Task</button>
    </form>
   </section>
  )
}

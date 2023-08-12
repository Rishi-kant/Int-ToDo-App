

import React from 'react'
import style from "./TodoForm.module.css"
export default function TodoForm({onChange,onSubmit,task,todos,completedTask,handledeleteComp}) {
  return (
    <div className={style.container}>
         <div className={style.upper}>
            <div>
              <h3 >All Tasks: {todos.length}</h3>      
           </div>
            <div>
              <h3 >Completed Tasks:  {completedTask}</h3>
            </div>
            <div>
              <button 
              className={style.clearbtn}
              onClick={handledeleteComp}
              >Clear Completed</button>
            </div>
         </div>
         <div >
          <form onSubmit={onSubmit} className={style.lower}>
            <input 
             type="text"
             value={task}
             required
             onChange={onChange}
            className={style.inp}/>
            <button 
            type='submit'
            className={style.btn}
            >Add Task</button>
            </form>
         </div>
    </div>
  )
}

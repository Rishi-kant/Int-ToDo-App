

import React from 'react'
import style from "./Todo.module.css"
import {MdOutlineDeleteForever}from "react-icons/md"
export default function Todo({task,onClick,handleCheckBoxChange}) {

  return (
    <div className={style.container}>
       <div className={style.incontainer}>
        <h3 className={style.heading}>{task.task}</h3>
       </div>
       <div  className={style.incontainer2}>
       <div >
        <input
        className={style.inpCheck}
        type='checkbox'
        checked={task.completed}
        onChange={ handleCheckBoxChange}
        />
       </div>
       <div>
        <MdOutlineDeleteForever className={style.delIcon} onClick={onClick}/>
       </div>
       </div>
    </div>
  )
}

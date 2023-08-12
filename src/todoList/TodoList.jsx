import React, { useState } from "react";
import style from "./TodoList.module.css";
import TodoForm from "../components/todoForm/TodoForm";
import { useEffect } from "react";
import Todo from "../components/todo/Todo";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const[completedTask,setCompletedTask]=useState("")
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data) {
      setTodos(data);
    } else {
      setTodos([]);
    }
  }, []);

  useEffect(()=>{
    const completedTask=todos.filter((task)=>task.completed===true)
    if(completedTask){
      setCompletedTask(completedTask.length)
    }else{
      setCompletedTask(0)
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    const newTask={
      id:Date.now(),
      task:task,
      completed:false
    }
    const newTodos = [...data,newTask];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
    setTask("");
  };
  const handlDel=(taskId)=>{
    const newTodo=todos.filter((task)=>task.id!==taskId)
    localStorage.setItem("todos",JSON.stringify(newTodo))
    setTodos(newTodo)
  }
   const handleCheckBoxChange=(taskId)=>{
    const modifiedTodos=todos.map((task)=>task.id===taskId?{...task, completed:!task.completed}:task)
    localStorage.setItem("todos",JSON.stringify(modifiedTodos))
    setTodos(modifiedTodos)
   }
   const handledeleteComp=()=>{
     const onlyPendingTask=todos.filter((task)=>task.completed===false)
     localStorage.setItem("todos",JSON.stringify(onlyPendingTask))
     setTodos(onlyPendingTask)
   }
  return (
    <div className={style.container}>
      <div>
        <TodoForm onChange={handleChange} onSubmit={handleSubmit} task={task} todos={todos} completedTask={completedTask} handledeleteComp={handledeleteComp}/>
      </div>
      <div className={style.innerContainer}>
        {todos.map((task) =>{
          return <Todo key={task.id} task={task} onClick={()=>handlDel(task.id)} handleCheckBoxChange={()=>handleCheckBoxChange(task.id)}/>;
        })}
      </div>
    </div>
  );
}


import React from 'react'
import style from "./App.module.css"
import TodoList from './todoList/TodoList'
import Navbar from './components/navbar/Navbar'
export default function App() {
  return (
    <div className={style.container}>
      <Navbar/>
      <TodoList/>
    </div>
  )
}

import React from "react"
import ToDoItems from "./ToDoItems";
import { todos } from "../constants/mockData";
const ToDoList = () =>{
    
    return (
        <div>
          {todos.map((todo) =>{
            return <ToDoItems key={todo.id} todo={todo}/>
          })}
        </div>
    )
}
export default ToDoList
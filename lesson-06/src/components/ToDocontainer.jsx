import React from "react";
import Todoinput from "./Todoinput";
import ToDoList from "./ToDoList";

const ToDocontainer = () =>{
    return (
        <div className="Todocontainer">
            <Todoinput/>
            <ToDoList/>
        </div>
    )
}
export default ToDocontainer
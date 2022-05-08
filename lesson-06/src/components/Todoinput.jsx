import React from "react";

const Todoinput = () =>{
    const greeting =()=>{
        console.log("hello")
    }
    const handleChange = (event)=>{
        const value = event.target.value
        console.log(value)
    }
    return (
        <div>
            <input type="text" placeholder="Enter your ToDo" onChange={handleChange} />
            <button onClick={greeting}>Add</button>
        </div>
    )
}
export default Todoinput
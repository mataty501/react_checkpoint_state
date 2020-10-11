import React, { useState } from "react";
{/*set todoes en props*/}
const Todo = (props) => {
  const [editTodo, setEditTodo] = useState(props.todo.task);

  const change = (e) => {
    

    setEditTodo(e.target.value)

    e.stopPropagation()
  }


  const blur = (e) => { 
    props.setTodos((prevState)=>{
      const newState = [...prevState]
      const index = newState.findIndex((elem)=> elem.id === props.todo.id)
      newState[index] = {...props.todo,task : e.target.value}
      return newState
    })
  }

  const del = (e) => { 
    console.log('hi')
    props.setTodos((prevState)=>{
      const newState = [...prevState]
      const index = newState.findIndex((elem)=> elem.id === props.todo.id)
      //newState[index] = {...props.todo,checked : !props.todo.checked}
      newState.splice(index, 1);
      return newState
    })
    e.stopPropagation()
  }

  const handleCheck = () => {
    props.setTodos((prevState)=>{
      const newState = [...prevState]
      const index = newState.findIndex((elem)=> elem.id === props.todo.id)
      newState[index] = {...props.todo,checked : !props.todo.checked}
      return newState
    })
  }

  return (
    <li className={`${props.todo.checked ? "checked" : ""}`} onClick={() => handleCheck()}>
       <form onClick = {(e)=> e.stopPropagation()}>
       <input className="input"
              type="text" 
              value={editTodo}
              onChange={(e) => change(e)} /*saved if blur event is active*/
              onBlur={(e) => {blur(e) } } /* save by exit */
              
       /> 
      </form>
       <button className="delete" onClick={(e) => del(e)}>delete</button>
       
    </li>
    
  ); 
};

export default Todo;
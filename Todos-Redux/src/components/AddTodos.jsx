import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  };

  return (    
      <form onSubmit={handleSubmit}>
        <input type="text" 
        value={todo}
        />    
      </form>    
  )
}

export default AddTodo;
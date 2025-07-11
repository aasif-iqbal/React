import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos:[
    // {
    //   id:1,
    //   todo_title:'todo msg',
    //   completed:false
    // }
  ],
  addTodo : (todo_title) => {},
  updateTodo:(id, todo_title) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
});

// custom hook
export const useTodo = () => {
  return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
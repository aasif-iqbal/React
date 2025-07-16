## React Redux & Redux-toolkit

1. create store

+ src/app/store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer
})
```

2. 
```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

3. src/main.jsx

```js
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```
4. src/App.jsx

```js
import './App.css'
import AddTodo from './components/AddTodos.jsx'
function App() {

  return (
    <>
      <div className='text-2xl text-center bg-gray-900 text-white'>Todo with React-redux & redux toolkit</div>
      <AddTodo />
    </>
  )
}

export default App
```

5. src/components/AddTodos.jsx
```js
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
```
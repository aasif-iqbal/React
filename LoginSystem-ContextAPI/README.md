## How to Use Context-API

Step 1: Create context - context/UserContext.js

```js
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

Step 2: Create Provider - context/UserContextProvider.jsx

```js
import React from "react";
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

  const [user, setUser] = useState('');

  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
```

Step 3: Add(Wrap) it to App.jsx or main.jsx

```js
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'
function App() {
  
  return (
    <UserContextProvider>
      <Login />      
      <Profile />      
    </UserContextProvider>
  )
}

export default App
```

Step 4: Consume contextAPI by Creating Component - components/Login.jsx

```js
import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // context
  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) =>{
    e.preventDefault();    
    setUser({username, password});
  }

  return (
    <div className="">
    <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg space-y-6">
      <h3 className="text-2xl font-semibold text-center text-gray-800">Login</h3>
  
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
  
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
  
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </div>
  </div>
  

  )
}

export default Login;
```

Step 5: display it - components/Profile.jsx
```js
// to display
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {

  const {user} = useContext(UserContext);
  console.log('user-profile',user);
  
  if (!user) {
    return (<div className="text-2xl text-center bg-gray-900 text-red-800">please login</div>)
  }else{
    return (<div className="text-2xl text-center bg-gray-100 text-gray-800">Welcome {user.username}</div>)
  }
}

export default Profile;
```
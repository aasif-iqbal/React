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

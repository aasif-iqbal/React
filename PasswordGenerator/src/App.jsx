import { useEffect, useState, useCallback, useRef } from 'react'
import './App.css'

function App() {
    let [length, setLength] = useState(8);
    const [includeNumbers, setIncludeNumbers] = useState(false) // Default false for Numbers checkbox
    const [includeCharacter, setCharacter] = useState(false);
    const [password, setPassword] = useState("");

    const  passwordRef = useRef(null);

    let handleLengthChange = (e) => {
      setLength(e.target.value)
    }

    let handleNumberChange = (e) => {
      setIncludeNumbers(e.target.checked)
    }

    let handleCharacterChange = (e) => {
      setCharacter(e.target.checked);
    }
    let generatePassword = useCallback(() => {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      
      if(includeCharacter){
        str += "!@#$%^&*-_+=[]{}~`";
      }

      if(includeNumbers){
        str += "0123456789";
      }

      let pass = '';
      for(let i=0; i < length; i++){
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },[length, includeNumbers, includeCharacter, setPassword]);

    const copyPasswordToClipboard = useCallback(() =>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,99);
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
      generatePassword();      
    },[length, includeNumbers, includeCharacter, generatePassword]);

  return (    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-900 text-orange-500'>
        <h3 className='text-center'>Password Generator</h3>
        <div className='flex gap-x-2 mb-4'>
          <input 
            type="text" 
            className='flex-1 px-3 py-2 bg-gray-700 text-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button 
          className='px-4 py-2 bg-orange-500 text-gray-800 rounded-md hover:bg-orange-600 transition-colors'
          onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              className='cursor-pointer'
              type="range" 
              max={20}
              min={6}            
              value={length}
              onChange={handleLengthChange}
            />
            <label htmlFor="">Length:{length}</label>
          </div>  
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              defaultChecked={includeNumbers}
              onChange={handleNumberChange}
              className='h-4 w-4 text-orange-500 focus:ring-orange-500'
            />
            <label htmlFor="">Numbers</label>
          </div>        
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={includeCharacter}
              onChange={handleCharacterChange}
              name="" 
              id=""
              />
            <label htmlFor="">Characters</label>
          </div>        
        </div>
      </div>    
  )
}

export default App

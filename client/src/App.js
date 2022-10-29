import React, { useState } from 'react'
import './App.css';
import axios from 'axios'


function App() {
  const [name,setName] = useState('')



  async function postName(e){
    e.preventDefault()
    try {
     await axios.post('http://localhost:3500',{
        name
      })
      setName('')
      
    } catch (error) {
      console.log(error)
      
    }
  
  }

  return (
    <div className="App">
  <form onSubmit={postName}>
    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
    <button type="submit">Send Button</button>

    
  </form>
    </div>
  );
}

export default App;

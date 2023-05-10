import React from 'react'
import './App.css';

const App = () => {
  return (
    <>
     <h1>Todo App</h1>
     <div className='search'>
      <input type='{name}' placeholder='Type Here'></input>
      <button>Add</button>
      </div>
           
         <div className='read'>
          <h2> 
             This is unique code of todo app 
          </h2>
          <button>Delete</button>
          </div>  
    </>
  )
}

export default App;
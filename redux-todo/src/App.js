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
       <div className='todo'>
         <p>
          this is a Todo App List
         </p>
        </div>  
    </>
  )
}

export default App;
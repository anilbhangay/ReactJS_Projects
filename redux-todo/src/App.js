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

      <div className='input'>
        <p>This is a Todo App list </p>
        <button>Delete</button>
      </div>

    </>
  )
}

export default App;
import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className='header'>
      <h1>Todo App</h1>
      <div className='text'>
        <input type={'text'} name='text'  placeholder='Enter Here'/>
          <button className='btn'>
             Add
          </button>
      </div>
    </div>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className='header'>
      <h1>Todo List</h1>
      <input type={'text'} name='text'  placeholder='Enter Here'/>
          <button className='btn' type= {'submit'}> 
             Add
          </button>
    </div>
    </>
  );
}

export default App;

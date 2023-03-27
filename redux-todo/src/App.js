import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <div className='header'>
      <h1>Todo List</h1>
      <input type={'text'} name='text'  placeholder='Enter Here'/>
          <button className='btn' type= {'submit'}> 
             Submit
          </button>
    </div>
    <div className='list'>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </div>
    </>
  );
}

export default App;

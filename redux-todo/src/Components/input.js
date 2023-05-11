import React from 'react';
import './Input.css';

const Input = () => {
      
    const addTodo = () => {
        
    }

  return (
    <div className='input'>
          <input type='text'/>
          <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input;
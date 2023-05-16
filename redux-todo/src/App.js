import React from 'react';
import './App.css';
import Input from './Components/Input';
import TodoItem from './Components/TodoItem';

const todoList = [{
  item: 'todo',
  done: false,
  id: 695426487923
},{
    item:  'todo2',
    done:  true,
    id:   85838
}]

function App() {
    return (
       <div className='app'>
         <div className='app_container'>
            <div className='app_todoContainer'>
                 {
                  todoList.map(item => (
                        <TodoItem />
                  ))
                 }

            </div>
         <Input />
         </div>
       </div>
    );
}


export default App; 
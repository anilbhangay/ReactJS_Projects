import React from 'react'

const TodoItem = ({ name, done, id }) => {
  return (
    <div className='todoItem'>

      <p className={done && 'todoItem--'}>{name}</p>
    </div>
  )
}

export default TodoItem
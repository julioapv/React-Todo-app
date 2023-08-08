import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css'

function CreateTodoButton() {

  const {
    setOpenModal,
} = React.useContext(TodoContext)


  return (
    <button 
    className='addButton'

    onClick={(event) => {
      setOpenModal(state => !state)
    }}
    
    >+</button>
  )
}

export { CreateTodoButton };
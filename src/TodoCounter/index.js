import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos,
    } = React.useContext(TodoContext)

    return(

        totalTodos === completedTodos 
        ? <h1 className='counter-tittle'>
        No tasks for now 👀
        </h1>
        : 
        <h1 className='counter-tittle'>
        You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> tasks
        </h1>
    )
}

export { TodoCounter };
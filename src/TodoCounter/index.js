import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {completedTodos, totalTodos,} = React.useContext(TodoContext)

    return(

        totalTodos === completedTodos 
        ? <h1 className='counter-tittle'>
        Congrats! You have completed all your tasks!
        </h1>
        : 
        <h1 className='counter-tittle'>
        You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> tasks
        </h1>
    )
}

export { TodoCounter };
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return(

        total === completed 
        ? <h1 className='counter-tittle'>
        Congrats! You have completed all your tasks!
        </h1>
        : 
        <h1 className='counter-tittle'>
        You have completed <span>{completed}</span> of <span>{total}</span> tasks
        </h1>
    )
}

export { TodoCounter };
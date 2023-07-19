import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return(
        <h1 className='counter-tittle'>
            You have completed <span>{completed}</span> of <span>{total}</span> tasks
        </h1>
    )
}

export { TodoCounter };
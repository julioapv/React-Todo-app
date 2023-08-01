import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
}) {
    return(
<>
<TodoCounter 
completed={completedTodos} 
total={totalTodos} 
/>

<TodoSearch
searchValue={searchValue}
setSearchValue={setSearchValue}
/>

<TodoList>
    
    {loading && <p>Loading your tasks, please wait...</p>}
    {error && <p>Something went wrong, but don't worry!</p>}
    {(!loading && searchedTodos.lenght === 0) && <p>Create a new task!</p>}

    {searchedTodos.map(todo => (
    <TodoItem 
    key={todo.text} 
    text={todo.text} 
    completed={todo.completed}
    onComplete={() => completeTodo(todo.text)}
    onDelete={() => deleteTodo(todo.text)}
    />
    ))}

</TodoList>

<CreateTodoButton />
</>
    )
}

export { AppUI };
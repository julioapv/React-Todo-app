import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { InitialMessage } from '../InitialMessage';
import { CreateTodoButton } from "../CreateTodoButton";
import { NewTodoForm } from "../NewTodoForm"
import { Modal } from '../Modal';
// import { Modal } from '@mui/material';
import { TodoContext } from '../TodoContext';

function AppUI () {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext)


    return(
<>
<TodoCounter />

<TodoSearch />

        <TodoList>
            {loading && (
            <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            </>
            )}
            {error && <TodosError />}
            {(!loading && searchedTodos.lenght === 0) && <InitialMessage />}

            {/* {loading && <p>Loading your tasks, please wait...</p>}
            {error && <p>Something went wrong, but don't worry!</p>} */}
            {/* {(!loading && searchedTodos.lenght === 0) && <p>Create a new task!</p>} */}

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

    {openModal && (
        <Modal>
            <NewTodoForm />
        </Modal>
    )}

</>
    )
}

export { AppUI };
import React from 'react'
import { TodoContext } from '../TodoContext'
import "./NewTodoForm.css"

function NewTodoForm() {
    const {
        todos,
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        const existingTodos = todos.filter(todo => todo.text === newTodoValue);
        if(existingTodos.length > 0) {
            alert("This task is already on the list")
            return false;
        }

        if(!newTodoValue) {
            alert("You can't add an empty task")
            return false;
        }

        addTodo(newTodoValue)
        setOpenModal(false)
    };
    
    const onCancel = (event) => {
        setOpenModal(false)
    };

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }
    
    return (
    <form 
    className='form-container'
    onSubmit={onSubmit}
    >

        <label>Add a new <span>task</span></label>
        <textarea 
        placeholder='Buy milk 🥛'
        value={newTodoValue}
        onChange={onChange}
        />
        
        <div className="button-container">
            <button
            className='TodoForm-button TodoForm-button-cancel'
            type='button'
            onClick={onCancel}
            >
                Cancel
            </button>

            <button
            className='TodoForm-button TodoForm-button-add'
            type='button'
            onClick={onSubmit}
            >
                Add
            </button>
        </div>
    </form>
)
}

export { NewTodoForm }
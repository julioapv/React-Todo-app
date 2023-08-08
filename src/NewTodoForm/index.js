import React from 'react'
import "./NewTodoForm.css"

function NewTodoForm() {
    return (
    <form 
    className='form-container'
    onSubmit={(event) => {
        event.preventDefault();
    }}
    >
        <label>Add a new <span>task</span></label>
        <textarea type="text" placeholder='Buy milk 🥛'
        />
        
        <div className="button-container">
            <button
            className='TodoForm-button TodoForm-button-cancel'
            type='button'
            >
                Cancel
            </button>

            <button
            className='TodoForm-button TodoForm-button-add'
            type='button'
            >
                Add
            </button>
        </div>
    </form>
)
}

export { NewTodoForm }
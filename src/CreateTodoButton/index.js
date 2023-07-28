import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button 
    className='addButton'
    onClick={(event) => {
      console.log(event);
      console.log(event.target);
      console.log(event.target.innerHTML);
      console.log('You clicked the button!');
    }}
    >+</button>
  )
}

export { CreateTodoButton };
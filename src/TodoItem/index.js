import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from './CompleteTodo';
import { DeleteIcon } from './DeleteTodo';



const TodoItem = (props) => {
  const { text, completed, onComplete, onDelete} = props;

  return (
    <li className="TodoItem">
      <CompleteIcon
        onClick={onComplete}
        completed={completed}
      />

      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>

      <DeleteIcon
        onClick={onDelete}
        className='icon icon-delete'
      />
    </li>
  )
}

// function TodoItem(props) {
//   return (
//     <li className="TodoItem">
//       <span 
//       className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
//       onClick={props.onComplete}
//       >
//         V
//       </span>
//       <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
//         {props.text}
//       </p>
//       <span 
//       className="Icon Icon-delete"
//       onClick={props.onDelete}
//       >
//         X
//       </span>
//     </li>
//   );
// }

export { TodoItem };
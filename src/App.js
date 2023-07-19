import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTasks = [
  { text: 'Cut onions', completed: true },
  { text: 'Learn TailWind', completed: false },
  { text: 'Learn CSS', completed: true },
  { text: 'Go shopping', completed: false },
]

function App() {

  return (
    <>

      <TodoCounter 
      total={6} 
      completed={4} 
      />

      <TodoSearch />

      <TodoList>
        
        {defaultTasks.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          />
        ))}

      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
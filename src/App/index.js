import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import react from 'react';

// const defaultTodos = [
//   { text: 'Cut onions', completed: false },
//   { text: 'Learn TailWind', completed: true },
//   { text: 'Learn CSS', completed: true },
//   { text: 'Go shopping', completed: false },
//   { text: 'Go camping', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');  

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos= todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
      //return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  );

  console.log('log1');

  // react.useEffect(() => {
  //   console.log('loooog2');
  // });

  // react.useEffect(() => {
  //   console.log('loooog2');
  // }, []);

  
  react.useEffect(() => {
    console.log('loooog2');
  }, [totalTodos]);

  console.log('log3');

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  // const completeTodo = (text) => {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex(
  //       (todo) => todo.text === text
  //     );
  //   newTodos[todoIndex].completed = true;
  //   setTodos(newTodos);
  // }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
import React from 'react';
import { AppUI } from './AppUI';
import react from 'react';
import { TodoProvider } from '../TodoContext';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
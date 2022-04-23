import React from 'react'
import { TodoList } from './TodoList';

const App = () => {
  const state = {
    todos: [
      { id: 1, title: 'First Todo', completed: true },
      { id: 2, title: 'Second Todo', completed: false },
    ]
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className={"input-field"}>
        <input type="text" />
        <label>Todo name</label>
      </div>

      <TodoList todos={state.todos} />
    </div>
  );
}

export default App;

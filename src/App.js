import React, { useEffect, useState } from 'react'
import { TodoList } from './TodoList';

const App = () => {
  const initialState = {
    todos: [],
    title: '',
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log('ComponentDidMount');
    const raw = localStorage.getItem('todos') || [];
    const todos = JSON.parse(raw);
    setState((prev) => ({ ...prev, todos }));
    return () => {
      console.log('ComponentDidMount deps todos');
    };
  }, []);

  const handleClick = () => console.log('click');

  useEffect(() => {
    console.log('ComponentDidUpdate deps todos');
    document.addEventListener('click', handleClick);
    localStorage.setItem('todos', JSON.stringify(state.todos));
    return () => {
      document.removeEventListener('click', handleClick)
    };
  }, [state.todos]);

  const onChange = (event) => {
    setState((prev) => ({ ...prev, title: event.target.value }));
  };

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      const newTodo = { id: state.todos.length, title: state.title, completed: false };
      setState((prev) => (
          { ...prev, todos: [...state.todos, newTodo], title: '' }
        )
      );
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      <label>Todo name</label>
      <div className={"input-field"}>
        <input
          type="text"
          value={state.title}
          onChange={onChange}
          onKeyPress={addTodo}
        />
      </div>

      <TodoList todos={state.todos} />
    </div>
  );
};

export default App;

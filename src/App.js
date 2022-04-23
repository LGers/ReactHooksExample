import React, { useEffect, useId, useState } from 'react'
import { TodoList } from './TodoList';
import { Context } from './context';

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
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  const onChange = (event) => {
    setState((prev) => ({ ...prev, title: event.target.value }));
  };

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      const newTodo = { id: new Date(), title: state.title, completed: false };
      setState((prev) => (
          { ...prev, todos: [...state.todos, newTodo], title: '' }
        )
      );
    }
  };

  const removeTodo = (id) => {
    setState((prev) => (
        { ...prev, todos: state.todos.filter((todo) => (todo.id !== id)) }
      )
    );
  };

  const toggleTodo = (id) => {
    setState((prev) => (
      { ...prev, todos: state.todos.map((todo) => {
        if (todo.id === id) {todo.completed = !todo.completed}
        return todo;
        }) }
      )
    );
  };

  return (
    <Context.Provider value={{
      removeTodo,
      toggleTodo,
    }}>
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
    </Context.Provider>
  );
};

export default App;

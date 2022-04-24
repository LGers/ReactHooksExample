import React, { useEffect, useReducer } from 'react'
import { TodoList } from './TodoList';
import { AppContext } from './App.context';
import { appReducer } from './App.reducer';

const App = () => {
  const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')),
    title: '',
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    console.log('ComponentDidUpdate deps todos');
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  const onChange = (event) => {
    dispatch({ type: 'changeInput', payload: event.target.value});
  };

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      dispatch({ type: 'add', payload: state.title});
    }
  };

  const removeTodo = (id) => {
    dispatch({ type: 'remove', payload: id});
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'toggle', payload: id});;
  };

  return (
    <AppContext.Provider value={{
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
    </AppContext.Provider>
  );
};

export default App;

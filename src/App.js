import React, {useState} from 'react'
import { TodoList } from './TodoList';

const App = () => {
  const initialState = {
    todos: [
      { id: 0, title: 'First1 Todo', completed: true },
      { id: 1, title: 'Second Todo', completed: false },
    ],
    title: '',
  };

  const [state, setState] = useState(initialState);
  const onChange = (event) =>{
    setState((prev) => ({ ...prev, title: event.target.value }))
  };

  const addTodo = (event) =>{
    if (event.key === 'Enter') {
      const newTodo = { id: state.todos.length, title: state.title, completed: false };
      setState((prev) => (
        { ...prev, todos: [ ...state.todos, newTodo], title: '' }
        )
      )
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
          // placeholder={'Todo name'}
        />
      </div>

      <TodoList todos={state.todos} />
    </div>
  );
}

export default App;

import React, { useState, useContext } from 'react';
import { AppContext } from './App.context';

export const TodoItem = ({ id, title, completed }) => {
  // const [checked, setChecked] = useState(completed);
  const { toggleTodo, removeTodo } = useContext(AppContext);

  const cls = ['todo']

  if (completed) {
    cls.push('completed')
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type={"checkbox"}
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() => removeTodo(id)}
        >
          delete
        </i>
      </label>
    </li>
  );
};

import React, { useState } from 'react';

export const TodoItem = ({ id, title, completed }) => {
  const [checked, setChecked] = useState(completed);
  const cls = ['todo']

  if (checked) {
    cls.push('completed')
  }

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type={"checkbox"}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  );
};

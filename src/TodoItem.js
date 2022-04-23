import React from 'react';

export const TodoItem = ({ id, title, completed }) => {
  return (
    <li>
      <label>
        <input type={"checkbox"} defaultChecked={false}/>
        <span>{title}</span>

        <i className="material-icons red-text">Delete</i>
      </label>
    </li>
  );
  ;}
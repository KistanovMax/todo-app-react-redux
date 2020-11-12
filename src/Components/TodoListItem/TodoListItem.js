import React from 'react';
import './TodoListItem.css';

export default function TodoListItem({ title }) {
  return (
    <ul>
      <li className='todo-list-item'>{title}</li>
    </ul>
  );
}

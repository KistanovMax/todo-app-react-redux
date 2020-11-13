import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';

function TodoList() {
  const todosArr = useSelector((state) => state.todoReducer);

  return (
    <div>
      {todosArr.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} todoId={todo.id} />
      ))}
    </div>
  );
}

export default React.memo(TodoList);

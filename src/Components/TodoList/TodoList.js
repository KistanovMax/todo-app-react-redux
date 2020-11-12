import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

function TodoList() {
  const todosArr = useSelector((state) => state.todoReducer);

  return (
    <div>
      {todosArr
        .filter((todo) => todo.id > 0)
        .map((todo) => (
          <TodoListItem key={todo.id} title={todo.title} />
        ))}
    </div>
  );
}

export default React.memo(TodoList);

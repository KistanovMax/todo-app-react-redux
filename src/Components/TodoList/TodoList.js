import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';

import './TodoList.css';

function TodoList() {
  const todosArr = useSelector((state) => state.todoReducer);

  return (
    <div className='todo-list'>
      {todosArr.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} todoId={todo.id} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todosArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default React.memo(TodoList);

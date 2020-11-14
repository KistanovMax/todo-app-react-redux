import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import PropTypes from 'prop-types';

import { deleteTodo } from '../../redux/actions/actions';

import './TodoList.css';

function TodoList() {
  const { date } = useSelector((state) => state.dateReducer);
  const todosArr = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();
  const clickTrashButton = (todoId) => dispatch(deleteTodo(todoId));

  return (
    <div className='todo-list'>
      {todosArr.map((todo) => (
        <TodoListItem
          key={todo.id}
          title={todo.title}
          todoId={todo.id}
          date={date}
          clickTrashButton={clickTrashButton}
        />
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

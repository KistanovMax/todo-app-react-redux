import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoListItem from '../TodoListItem/TodoListItem';
import ControlPanel from '../ControlPanel/ControlPanel';
import PropTypes from 'prop-types';

import {
  deleteTodo,
  todoDone,
  todoImportant,
  deleteCompletedTodos,
} from '../../redux/actions/actions';

import './TodoList.css';

function TodoList() {
  const { date } = useSelector((state) => state.dateReducer);
  const todosArr = useSelector((state) => state.todoReducer);
  const counter = useSelector((state) => state.todoCounter);

  const dispatch = useDispatch();
  const clickTrashButton = useCallback(
    (todoId) => {
      dispatch(deleteTodo(todoId));
    },
    [dispatch]
  );

  const tooggleDone = useCallback(
    (todoId, isDone) => {
      dispatch(todoDone(todoId, isDone));
    },
    [dispatch]
  );

  const tooggleImportant = useCallback(
    (todoId, isImportant) => {
      dispatch(todoImportant(todoId, isImportant));
    },
    [dispatch]
  );

  const clickDeleteCompletedTodos = () => dispatch(deleteCompletedTodos());

  return (
    <div className='todo-list-box container'>
      {todosArr.length > 0 ? (
        <ControlPanel counter={counter} clickDeleteCompletedTodos={clickDeleteCompletedTodos} />
      ) : null}
      <div className='todo-list'>
        {todosArr.map((todo) => (
          <TodoListItem
            key={todo.id}
            title={todo.title}
            todoId={todo.id}
            isDone={todo.isDone}
            isImportant={todo.isImportant}
            date={date}
            clickTrashButton={clickTrashButton}
            tooggleDone={tooggleDone}
            tooggleImportant={tooggleImportant}
          />
        ))}
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todosArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      isImportant: PropTypes.bool.isRequired,
    }).isRequired
  ),
  date: PropTypes.string,
};

export default React.memo(TodoList);

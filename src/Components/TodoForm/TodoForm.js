import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

import './TodoForm.css';

import { addTodo } from '../../redux/actions/actions';

function TodoForm() {
  const [title, setTitle] = useState('');
  const todoId = uuid();
  const dispatch = useDispatch();

  const clickAddButton = (title, todoId) => {
    dispatch(addTodo(title, todoId));
    setTitle('');
  };

  const typeTitleText = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  const pressEnter = useCallback(
    (event) => {
      if (title && event.keyCode === 13) {
        dispatch(addTodo(title, todoId));
        setTitle('');
      }
    },
    [dispatch, title, todoId]
  );

  return (
    <div className='input-group container'>
      <input
        onChange={typeTitleText}
        onKeyDown={pressEnter}
        type='text'
        className='form-control'
        placeholder='New ToDo'
        value={title}
      />
      <div className='input-group-append'>
        <button
          disabled={!title}
          onClick={() => clickAddButton(title, todoId)}
          className='btn btn-secondary'
          type='button'
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
}

export default React.memo(TodoForm);

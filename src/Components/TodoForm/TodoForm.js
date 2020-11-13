import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';

import './TodoForm.css';

import { addTodo } from '../../redux/actions/actions';

function TodoForm() {
  const [title, setTitle] = useState('');
  const todoId = uuid();
  const dispatch = useDispatch();
  const clickAddkButton = (title, todoId) => dispatch(addTodo(title, todoId));

  const typeTitleText = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );

  return (
    <div className='input-group mb'>
      <input
        onChange={typeTitleText}
        type='text'
        className='form-control'
        placeholder='New ToDo'
        value={title}
      />
      <div className='input-group-append'>
        <button
          disabled={!title}
          onClick={() => clickAddkButton(title, todoId, setTitle(''))}
          className='btn btn-info'
          type='button'
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
}

export default React.memo(TodoForm);

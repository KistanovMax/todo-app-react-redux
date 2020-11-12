import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import './TodoForm.css';

import { addTodo } from '../../redux/actions/actions';

function TodoForm() {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const clickAddkButton = (title) => dispatch(addTodo(title));

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
          onClick={() => clickAddkButton(title, setTitle(''))}
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

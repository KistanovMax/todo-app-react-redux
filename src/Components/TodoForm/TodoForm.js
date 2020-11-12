import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './TodoForm.css';

import { addTodo } from '../../redux/actions/actions';

export default function TodoForm() {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();
  const handleClickButton = (title) => dispatch(addTodo(title));

  const typeTitleText = (event) => {
    setTitle(event.target.value);
  };

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
          onClick={() => handleClickButton(title, setTitle(''))}
          className='btn btn-info disabled'
          type='button'
        >
          Add ToDo
        </button>
      </div>
    </div>
  );
}

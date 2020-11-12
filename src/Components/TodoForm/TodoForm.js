import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './TodoForm.css';

import { addTodo } from '../../redux/actions/actions';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const clickAddButton = (title) => dispatch(addTodo(title));

  const handleTitleTodo = (event) => {
    setTitle(event.target.value);
  };

  console.log(title);

  return (
    <form>
      <input onChange={handleTitleTodo} type='text' placeholder='New task' />
      <button onClick={() => clickAddButton(title)} type='button'>
        Submit
      </button>
    </form>
  );
}

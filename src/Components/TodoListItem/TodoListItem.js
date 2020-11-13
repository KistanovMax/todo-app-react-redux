import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTodo } from '../../redux/actions/actions';

import './TodoListItem.css';

function TodoListItem({ title, todoId }) {
  const [isDone, setIsDone] = useState(false);

  const dispatch = useDispatch();
  const clickTrashButton = (todoId) => dispatch(deleteTodo(todoId));

  const tooggleCheckbox = useCallback(() => {
    setIsDone(!isDone);
  }, [isDone]);

  let listItemStyle = 'list-group-item-secondary';

  if (isDone) {
    listItemStyle = 'list-group-item-danger';
  }

  return (
    <ul className='list-group'>
      <li className={`list-group-item ${listItemStyle} item-box`}>
        <div>
          <input
            className='form-check-input'
            onChange={tooggleCheckbox}
            type='checkbox'
          ></input>
          <div className='titleText'>{title}</div>
        </div>
        {isDone && (
          <button
            onClick={() => clickTrashButton(todoId)}
            className='btn btn-info btn-sm'
            type='button'
          >
            <svg
              width='1.2em'
              height='1.2em'
              viewBox='0 0 16 16'
              className='bi bi-trash'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
              <path
                fillRule='evenodd'
                d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
              />
            </svg>
          </button>
        )}
      </li>
    </ul>
  );
}

TodoListItem.propTypes = {
  todoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(TodoListItem);

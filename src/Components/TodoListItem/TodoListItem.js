import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTodo } from '../../redux/actions/actions';

import './TodoListItem.css';

function TodoListItem({ title, todoId }) {
  const [isDone, setIsDone] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  const dispatch = useDispatch();
  const clickTrashButton = (todoId) => dispatch(deleteTodo(todoId));

  const tooggleDone = useCallback(() => {
    setIsDone(!isDone);
  }, [isDone]);

  const tooggleImportant = useCallback(() => {
    setIsImportant(!isImportant);
  }, [isImportant]);

  let doneButtonStyle = 'button';
  if (isDone) {
    doneButtonStyle += ' done';
  }

  let importantTodoStyle = 'card-header bg-light text-secondary';
  if (isImportant) {
    importantTodoStyle = 'card-header important text-secondary';
  }

  return (
    <div>
      <div className='card text-secondary mb-2'>
        <div className={importantTodoStyle}>
          14 November
          <button className={doneButtonStyle} onClick={tooggleDone}>
            {isDone ? (
              <div className='button-text-green'>Awesome!</div>
            ) : (
              <div className='button-text'>Done?</div>
            )}
            <svg
              width='1.7em'
              height='1.7em'
              viewBox='0 0 16 16'
              className='bi bi-check2-square'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z'
              />
              <path
                fillRule='evenodd'
                d='M1.5 13A1.5 1.5 0 0 0 3 14.5h10a1.5 1.5 0 0 0 1.5-1.5V8a.5.5 0 0 0-1 0v5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 3v10z'
              />
            </svg>
          </button>
        </div>
        <div className='card-body bg-light' onClick={tooggleImportant}>
          <h5 className='card-title'>{title}</h5>
          {isDone && (
            <div className='card-buttons'>
              <button
                onClick={() => clickTrashButton(todoId)}
                className='button trash'
                type='button'
              >
                <div>
                  Delete?{' '}
                  <svg
                    width='1.7em'
                    height='1.7em'
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
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

TodoListItem.propTypes = {
  todoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default React.memo(TodoListItem);

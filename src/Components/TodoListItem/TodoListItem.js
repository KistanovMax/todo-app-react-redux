import React from 'react';
import PropTypes from 'prop-types';

import './TodoListItem.css';

function TodoListItem({
  title,
  todoId,
  date,
  isDone,
  isImportant,
  tooggleDone,
  tooggleImportant,
  clickTrashButton,
}) {
  let doneButtonStyle = 'button';
  if (isDone) {
    doneButtonStyle += ' done';
  }

  return (
    <div className='card text-secondary mb-2'>
      <div className='card-header bg-light text-secondary'>
        {date}
        <button
          className={doneButtonStyle}
          onClick={() => tooggleDone(todoId, isDone)}
        >
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
      <div
        className='card-body bg-light'
        onClick={() => tooggleImportant(todoId, isImportant)}
      >
        <h5 className='card-title'>
          {isImportant && (
            <svg
              width='1.3em'
              height='1.3em'
              viewBox='0 0 16 16'
              className='bi bi-exclamation-square'
              fill='rgba(255, 102, 0)'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'
              />
              <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
            </svg>
          )}
          {title}
        </h5>
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
  );
}

TodoListItem.propTypes = {
  todoId: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
  isDone: PropTypes.bool,
  isImportant: PropTypes.bool,
  clickTrashButton: PropTypes.func.isRequired,
  tooggleDone: PropTypes.func.isRequired,
  tooggleImportant: PropTypes.func.isRequired,
};

export default React.memo(TodoListItem);

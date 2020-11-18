import React from 'react';
import Done from '../SVG/Done';
import Important from '../SVG/Important';
import Trash from '../SVG/Trash';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  return (
    <div className='card text-secondary mb-2'>
      <div className='card-header bg-light text-secondary top-border-line'>
        {date}
        <button
          className={classNames('button', { 'done': isDone })}
          onClick={() => tooggleDone(todoId, isDone)}
        >
          {isDone && <div className='button-text-green'>Awesome!</div>}
          <Done />
        </button>
      </div>
      <div
        className='card-body bg-light'
        onClick={() => tooggleImportant(todoId, isImportant)}
      >
        <h5 className='card-title'>
          {isImportant && <Important />}
          {title}
        </h5>
        {isDone && (
          <div className='card-buttons'>
            <button
              onClick={() => clickTrashButton(todoId)}
              className='button trash'
              type='button'
            >
              <Trash />
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

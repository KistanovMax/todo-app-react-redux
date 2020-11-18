import React from 'react';
import PropTypes from 'prop-types';

import './ModalWindow.css';

export default function ModalWindow({
  counter,
  isOpen,
  setIsOpen,
  clickDeleteCompletedTodos,
}) {
  return (
    <div>
      {isOpen && (
        <div className='modal-window'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Are you sure ?</h5>
              <button
                onClick={() => setIsOpen(false)}
                type='button'
                className='button close'
              >
                <span aria-hidden='true'>X</span>
              </button>
            </div>
            <div className='modal-body'>
              You are going to delete {counter} completed todos
            </div>
            <div className='modal-footer'>
              <button
                onClick={() => setIsOpen(false)}
                type='button'
                className='btn btn-secondary gray'
              >
                No
              </button>
              <button
                onClick={() => clickDeleteCompletedTodos(setIsOpen(false))}
                type='button'
                className='btn btn-secondary orange'
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ModalWindow.propTypes = {
  counter: PropTypes.number,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  clickDeleteCompletedTodos: PropTypes.func.isRequired,
};

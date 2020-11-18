import React, { useState, useCallback } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ControlPanel.css';

export default function ControlPanel({ counter, clickDeleteCompletedTodos }) {
  const [isOpen, setIsOpen] = useState(false);

  const tooggleModal = useCallback(() => {
    if (counter > 0) {
      setIsOpen(true);
    }
  }, [counter]);

  return (
    <div>
      <ModalWindow
        counter={counter}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        clickDeleteCompletedTodos={clickDeleteCompletedTodos}
      />
      <div className='button-group container fixed-top bg-white'>
        <button
          onClick={() => tooggleModal()}
          type='button'
          className={classNames('btn btn-secondary left-btn', { orange: counter > 0 })}
        >
          Delete {counter} todos
        </button>
        <button type='button' className='btn btn-secondary right-btn'>
          Some function
        </button>
      </div>
    </div>
  );
}

ControlPanel.propTypes = {
  counter: PropTypes.number,
  clickDeleteCompletedTodos: PropTypes.func.isRequired,
};

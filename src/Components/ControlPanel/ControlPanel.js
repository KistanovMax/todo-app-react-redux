import React, { useState } from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import PropTypes from 'prop-types';

import './ControlPanel.css';

export default function ControlPanel({ counter, clickDeleteCompletedTodos }) {
  const [isOpen, setIsOpen] = useState(false);

  const tooggleModal = () => {
    if (counter > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <ModalWindow
        counter={counter}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        clickDeleteCompletedTodos={clickDeleteCompletedTodos}
      />
      <div className='btn-group container fixed-top bg-white'>
        <button
          onClick={() => tooggleModal()}
          type='button'
          className='btn btn-secondary left-btn'
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

import React from 'react';

import './ControlPanel.css';

export default function ControlPanel() {
  return (
    <div
      className='btn-group container fixed-top bg-white'
      role='group'
      aria-label='Basic example'
    >
      <button type='button' className='btn btn-secondary left-btn'>
        Left
      </button>
      <button type='button' className='btn btn-secondary'>
        Middle
      </button>
      <button type='button' className='btn btn-secondary right-btn'>
        Right
      </button>
    </div>
  );
}

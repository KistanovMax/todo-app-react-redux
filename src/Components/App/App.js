import React from 'react';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

import './App.css';

export default function App() {
  return (
    <div className=''>
      <div className='fixed-top bg-white'>
        <Header />
        <TodoForm />
      </div>
      <TodoList />
    </div>
  );
}

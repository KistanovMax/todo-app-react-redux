import React from 'react';
import './CurrentDate.css';

export default function CurrentDate() {
  const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date();
  const currentDate = `${date.getDate()} ${monthArr[date.getMonth()]}`;

  return <div className='date'>{currentDate}</div>;
}

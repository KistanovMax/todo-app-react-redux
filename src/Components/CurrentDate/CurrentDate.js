import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './CurrentDate.css';

import { transferDate } from '../../redux/actions/actions';

export default function CurrentDate() {
  const dispatch = useDispatch();
  const getCurrentDate = (currentDate) => dispatch(transferDate(currentDate));

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
  const currentDate = `${monthArr[date.getMonth()]}, ${date.getDate()}`;

  useEffect(() => {
    getCurrentDate(currentDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate]);

  return <div className='date'>{currentDate}</div>;
}

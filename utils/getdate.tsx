'use client';

import React, { useState, useEffect } from 'react';

export default function GetCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className=''>
      <div className=''>{formattedTime}</div>
    </div>
  );
}

export function GetCurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = date.toLocaleDateString('en-US', {
    month: 'numeric',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className=''>
      <div className=''>{formattedTime}</div>
    </div>
  );
}

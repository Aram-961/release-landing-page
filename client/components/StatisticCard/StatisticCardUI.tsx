import React from 'react';
import statisticCardProps from './type';

const StatisticCardUI = ({ status, value }: statisticCardProps) => {
  const showPlusSign =
    status === 'happy customers' || status === 'years in market';

  return (
    <div className='flex flex-col px-0'>
      <h1 className='text-[4.5rem] font-syne-bold text-white'>
        {value}
        {showPlusSign && '+'}
      </h1>
      <p className='text-[1.5rem] font-open-sans-light text-white'>{status}</p>
    </div>
  );
};

export default StatisticCardUI;

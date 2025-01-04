import Image from 'next/image';
import React from 'react';
import { CardFeatureProps } from './type';

const CardFeatureUI = ({ image, planning, dimension }: CardFeatureProps) => {
  return (
    <div className='relative w-[400px]'>
      <Image src={image} fill quality={100} alt='' className='rounded-[10px]' />
      <div className='absolute bg-[#1C2C41] p-4 px-3 rounded-tr-[8px] rounded-bl-[8px] w-[230px] bottom-0'>
        <div className='flex items-center gap-3'>
          <h1 className='text-white font-syne-bold'>{planning}</h1>
          <h4 className='text-white font-syne-bold'>{dimension} Sqft</h4>
        </div>
      </div>
    </div>
  );
};

export default CardFeatureUI;

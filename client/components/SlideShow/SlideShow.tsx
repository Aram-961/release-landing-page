import React from 'react';
import slideShowProps from './type';
import Image from 'next/image';
import { slideShowData } from '@/app/(home)/page';

const SlideShow = ({ img }: slideShowProps) => {
  return (
    <div className='w-full h-full'>
      {slideShowData.map((items) => (
        <div className='absolute'>
          <Image
            quality={100}
            fill
            style={{ objectFit: 'contain' }}
            src={items.img}
            alt='img'
          />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;

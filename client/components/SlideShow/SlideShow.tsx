import React from 'react';
import slideShowProps from './type';
import Image from 'next/image';

const SlideShow = ({ img }: slideShowProps) => {
  return (
    <div>
      <div className='flex flex-col items-center gap-4'>
        {img?.map((items) => (
          <Image
            width={800}
            quality={100}
            style={{ objectFit: 'contain' }}
            src={items}
            alt=''
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

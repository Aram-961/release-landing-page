import React from 'react';
import slideShowProps from './type';
import Image from 'next/image';

type SlideShowProps = {
  image: { src: string }[];
};
const SlideShow = ({ image }: SlideShowProps) => {
  return (
    <div>
      {image.map((items) => (
        <Image
          quality={100}
          fill
          style={{ objectFit: 'contain' }}
          src={items.src}
          alt={items.src}
        />
      ))}
    </div>
  );
};

export default SlideShow;

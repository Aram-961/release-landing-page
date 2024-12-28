'use client';
import React, { useEffect, useState } from 'react';
import slideShowProps from './type';
import Image from 'next/image';

type SlideShowProps = {
  image: { src: string }[];
};
const SlideShow = ({ image }: SlideShowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % image.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [image.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex - 1
    );
  };
  return (
    <div className='relative w-full h-full overflow-hidden'>
      <Image
        quality={100}
        fill
        key={image[currentIndex].src}
        src={image[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          transform: `translateY(-${100 * currentIndex}%)`,
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default SlideShow;

'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type SlideShowProps = {
  image: { src: string }[];
};

const SlideShow = ({ image }: SlideShowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [image.length]);

  return (
    <div className='relative w-full h-full'>
      <div
        className='flex flex-col h-full gap-2 rounded-[8px] transition-transform duration-700 ease-in-out'
        style={{
          transform: `translateY(-${currentIndex * 100}%)`, // Moves to the next image vertically
        }}
      >
        {image.map((item, index) => (
          <div key={index} className='relative flex-shrink-0 w-full h-[560px]'>
            <Image
              src={item.src}
              alt={`Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;

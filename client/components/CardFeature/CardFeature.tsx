import React from 'react';
import CardFeatureUI from './CardFeatureUI';

const CardFeature = () => {
  const cardFeatureData = [
    {
      id: 0,
      image: '/assets/slideshowimage/decoration.png',
      planning: 'Living Room',
    },
  ];
  return (
    <div className=''>
      {cardFeatureData.map((items, index) => (
        <CardFeatureUI
          image={items.image}
          planning='Balconies'
          dimension={399}
        />
      ))}
    </div>
  );
};

export default CardFeature;

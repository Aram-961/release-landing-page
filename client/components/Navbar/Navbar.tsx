import React from 'react';
import NavbarButton from './NavbarButton/NavbarButton';
import { ArrowLeft, ArrowRight } from '@/assets';

const Navbar = () => {
  const arrowIcons = [<ArrowLeft key='left' />, <ArrowRight key='right' />];
  return (
    <div className='flex m-10 mx-2 space-x-4'>
      {arrowIcons.map((icon, index) => (
        <NavbarButton key={index} ArrowIcon={icon} />
      ))}
    </div>
  );
};

export default Navbar;

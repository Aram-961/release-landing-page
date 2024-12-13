import React from 'react';
import NavbarButton from './NavbarButton/NavbarButton';
import { ArrowLeft, ArrowRight } from '@/assets';
import Link from 'next/link';
import { MyButton } from '../Variants/Button/MyButton';

type NavbarDataProps = {
  id: number;
  link: string;
};
const Navbar = () => {
  const arrowIcons = [<ArrowLeft key='left' />, <ArrowRight key='right' />];
  const navData: NavbarDataProps[] = [
    {
      id: 0,
      link: '/about', // Provide a valid `link` value
    },
    {
      id: 0,
      link: '/properties', // Provide a valid `link` value
    },
    {
      id: 0,
      link: '/client management', // Provide a valid `link` value
    },
  ];
  return (
    <div className='flex items-center w-full px-4 border-b-[1px] border-[#1C2C4180]'>
      <h1 className='font-nico-moji text-[2.5rem] text-[#1C2C41]'>Release</h1>
      <div className='flex items-center justify-center gap-10 m-10 mx-auto '>
        {/* Left Arrow */}
        <NavbarButton ArrowIcon={arrowIcons[0]} />

        {/* Navigation Links */}
        <div className='flex items-center space-x-4'>
          {navData.map(({ id, link }) => (
            <Link
              href={link}
              key={id}
              className='text-base capitalize hover:text-[#1C2C41] font-sans text-[#889098]'
            >
              {link.split('/')[1]}
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <NavbarButton ArrowIcon={arrowIcons[1]} />
      </div>
      <div>
        <MyButton color='primary' size='lg'>
          Sign In
        </MyButton>
      </div>
    </div>
  );
};

export default Navbar;

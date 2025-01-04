'use client';
import NavbarButton from './NavbarButton/NavbarButton';
import { ArrowLeft, ArrowRight, CloseIcon, HamburgerMenu } from '@/public';
import Link from 'next/link';
import { MyButton } from '../Variants/Button/MyButton';

export type NavbarDataProps = {
  id: number;
  link: string;
  label: string;
};

const Navbar = () => {
  const arrowIcons = [<ArrowLeft key='left' />, <ArrowRight key='right' />];
  const navData: NavbarDataProps[] = [
    { id: 1, link: '/', label: 'About' },
    { id: 2, link: '/', label: 'Properties' },
    { id: 3, link: '/', label: 'Client Management' },
  ];

  return (
    <div className='flex items-center w-full p-5 px-2 md:customSpacing '>
      {/* Logo */}
      <h1 className='font-nico-moji text-[2rem] text-[#1C2C41]'>Release</h1>

      {/* Desktop Navigation */}
      <div className='flex items-center justify-center gap-10 mx-auto'>
        {/* Left Arrow */}
        <NavbarButton ArrowIcon={arrowIcons[0]} />

        {/* Navigation Links */}
        <div className='flex items-center space-x-4'>
          {navData.map(({ id, link, label }) => (
            <Link
              href={link}
              key={id}
              className='text-base capitalize hover:text-[#1C2C41] font-sans text-[#889098]'
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <NavbarButton ArrowIcon={arrowIcons[1]} />
      </div>

      {/* Menu Button for Small Screens */}
      {/* <button
        className='block ml-auto md:hidden'
        onClick={toggleMenu}
        aria-label='Toggle Menu'
      >
        <HamburgerMenu />
      </button> */}

      {/* Mobile Menu */}
      <div className=''>
        {/* <div className='flex flex-col items-start p-6 space-y-4'>
          {navData.map(({ id, link, label }) => (
            <Link
              href={link}
              key={id}
              className='text-base capitalize hover:text-[#1C2C41] font-sans text-[#889098] w-full'
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {label}
            </Link>
          ))}
        </div> */}
        <MyButton
          color='primary'
          size='lg'
          // onClick={() => setIsMenuOpen(false)}
        >
          Sign In
        </MyButton>
      </div>
    </div>
  );
};

export default Navbar;

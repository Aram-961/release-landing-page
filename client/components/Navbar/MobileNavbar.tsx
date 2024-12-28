'use client';
import { CloseIcon, HamburgerMenu } from '@/public';
import React, { useState } from 'react';
import { NavbarDataProps } from './Navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MobileNavbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const handleNavClick = () => {
    SetIsOpen(!isOpen);
  };

  const navData: NavbarDataProps[] = [
    { id: 1, link: '/', label: 'About' },
    { id: 2, link: '/', label: 'Properties' },
    { id: 3, link: '/', label: 'Client Management' },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className='flex items-center w-full h-full p-5 px-6'>
      <h1 className='font-nico-moji w-full text-[2rem] text-[#1C2C41] '>
        Release
      </h1>
      <div className=''>
        <HamburgerMenu onClick={handleNavClick} />
      </div>
      {isOpen && (
        <motion.div
          className='absolute top-0 left-0 z-40 flex flex-col items-center w-full h-screen bg-[#161616]'
          initial='closed'
          animate='open'
          exit='closed'
          variants={sideVariants}
        >
          <div className='mt-10'>
            <CloseIcon onClick={handleNavClick} />
          </div>
          {navData.map((item, index) => (
            <div
              key={index}
              className='flex items-center justify-center w-full mt-24 cursor-pointer font-syne-bold text-[#ffffff] text-xl'
            >
              <Link href={item.link}>{item.label}</Link>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavbar;

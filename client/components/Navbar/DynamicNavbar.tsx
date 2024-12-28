'use client';
import React from 'react';
import MobileNavbar from './MobileNavbar';
import useUIStore from '@/store/UIStore';
import Navbar from './Navbar';

const DynamicNavbar = () => {
  const { isTablet } = useUIStore();
  return <div>{isTablet ? <MobileNavbar /> : <Navbar />}</div>;
};

export default DynamicNavbar;

'use client';
import { useMediaQuery } from 'react-responsive';
import useUIStore from '@/store/UIStore';
import { useEffect, useState } from 'react';

const LayoutUtils = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 960px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 576px)' });
  const [loaded, setLoaded] = useState<boolean>(false);
  const { setIsDesktop, setIsTablet, setIsMobile } = useUIStore();

  useEffect(() => {
    setIsDesktop(isDesktop);
    setIsTablet(isTablet);
    setIsMobile(isMobile);
    setLoaded(true);
  }, [isDesktop, isTablet, isMobile]);
  return null;
};

export default LayoutUtils;

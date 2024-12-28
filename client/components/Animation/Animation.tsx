'use client';
import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';

type animationTypes = {
  inView?: boolean;
  type?: 'tween' | string;
  duration?: number;
  threshhold?: number | string;
  children: ReactNode;
  delay?: number;
  opacity?: number;
  start?: number;
  xStart?: number;
  width?: number;
  number?: number;
  position?: string;
  bottom?: string;
  display?: string;
  jc?: string;
  ai?: string;
};
const AnimateWhenInView = ({
  inView = false,
  type = 'tween',
  duration = 0.3,
  threshhold = '750',
  children,
  delay,
  opacity = 0,
  start = 0,
  xStart = 0,
}: animationTypes) => {
  const elementRef = useRef();
  const [elementInView, setElementInView] = useState(false);

  const handleScroll = useCallback(() => {
    if (elementRef.current) {
      //@ts-ignore
      const rect = elementRef.current.getBoundingClientRect();
      const inView = rect.y <= threshhold;
      setElementInView(inView);
    }
  }, [elementRef]);

  useEffect(() => {
    if (!elementInView) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }
    // return () => {
    //   console.log('here2');
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, [elementInView, handleScroll]);

  return (
    <motion.div
      // motionn
      initial={{ y: start, x: xStart, opacity: opacity }}
      animate={
        inView
          ? elementInView
            ? { y: 0, x: 0, opacity: 1 }
            : { y: start, x: xStart }
          : { y: 0, x: 0, opacity: 1 }
      }
      // animate={{ y: 5 }}
      transition={{
        type: type,
        duration: duration,
        stiffness: 40,
        delay: delay,
      }}
      //@ts-ignore
      ref={elementRef}
      // style={width && { width: '100%', height: '100%' }}
      // style={{ width: 'fit-content', height: 'fit-content' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWhenInView;

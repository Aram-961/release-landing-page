import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';
import clsx from 'clsx';
import Navbar from '@/components/Navbar/Navbar';
// import Footer from '@/components/Footer/Footer';
import { Providers } from './providers';
import DynamicNavbar from '@/components/Navbar/DynamicNavbar';
import LayoutUtils from './layoutUtils';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Release',
  description: 'Your number 1 client management web application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className='relative flex flex-col justify-between w-full h-full gap-20 md:gap-0'>
            <div className='z-10'>
              <DynamicNavbar />
            </div>
            <div className='absolute top-0 flex items-center justify-center w-full h-screen bg-gradient-to-br from-purple-800 to-purple-900 '>
              <Image
                src='/assets/comingsoon.jpg'
                style={{ objectFit: 'cover' }}
                fill
                alt=''
              />
              <h1 className='z-30 text-[2rem] font-syne-bold'>Coming Soon</h1>
            </div>
            {/* <div className='w-full h-full '>{children}</div> */}
            {/* <div>
              <Footer />
            </div> */}
          </div>
          <LayoutUtils />
        </Providers>
      </body>
    </html>
  );
}

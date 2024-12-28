import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';
import clsx from 'clsx';
import Navbar from '@/components/Navbar/Navbar';
// import Footer from '@/components/Footer/Footer';
import { Providers } from './providers';
import DynamicNavbar from '@/components/Navbar/DynamicNavbar';
import LayoutUtils from './layoutUtils';

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
          <div className='flex flex-col justify-between gap-20 md:gap-0'>
            <div>
              <DynamicNavbar />
            </div>
            <div className='w-full h-full '>{children}</div>
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

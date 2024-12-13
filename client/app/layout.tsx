import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';
import clsx from 'clsx';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <div className='flex flex-col justify-between h-screen'>
            <div>
              <Navbar />
            </div>
            {children}
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}

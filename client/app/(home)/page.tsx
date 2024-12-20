'use client';
import SlideShow from '@/components/SlideShow/SlideShow';
import slideShowProps from '@/components/SlideShow/type';
import StatisticCardUI from '@/components/StatisticCard/StatisticCardUI';
// import StatisticCardUI from '@/components/StatisticCard/StatisticCardUI';
import statisticCardProps from '@/components/StatisticCard/type';
import Link from 'next/link';

export const slideShowData: slideShowProps[] = [
  { img: '/assets/homepageImage/CielEtJardinTower.jpeg' },
  { img: '/assets/slideshowimage/slideshowimage.png' },
  { img: '/assets/slideshowimage/decoration.png' },
];

const statisticData: statisticCardProps[] = [
  {
    id: 0,
    status: 'Projects',
    value: 120,
  },

  {
    id: 1,
    status: 'happy customers',
    value: 200,
  },

  {
    id: 2,
    status: 'years in market',
    value: 12,
  },
];
export default function Home() {
  return (
    <>
      <div className='flex justify-between w-full h-full pt-12 bg-white customSpacing '>
        <div className='flex flex-col gap-4 mx-auto responsiveWidth'>
          <h1 className='font-syne-bold text-[#1C2C41] text-[5rem]'>
            Luxury living <br className='hidden md:block' /> experiences
          </h1>
          <p className='w-full text-lg font-open-sans textPrimary'>
            Welcome to our premier property and client-realtor management
            platform, where innovation meets efficiency and seamless
            collaboration. Designed to redefine real estate operations, our
            solution empowers professionals to manage properties, tenants, and
            client relationships with ease, setting a new standard for success
            in the modern real estate industry.
          </p>
        </div>
        <div className='flex w-full h-full '>
          <SlideShow img={slideShowData[0].img} />
        </div>
      </div>{' '}
      <div className='fixed bottom-0 w-full bg-[#1C2C41] text-white py-4  flex  items-center'>
        {statisticData.map((items, index) => (
          <div className='customSpacing'>
            <StatisticCardUI
              id={items.id}
              status={items.status}
              value={items.value}
            />
          </div>
        ))}
      </div>
    </>
  );
}

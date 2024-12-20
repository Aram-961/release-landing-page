'use client';
import SlideShow from '@/components/SlideShow/SlideShow';
import slideShowProps from '@/components/SlideShow/type';
import StatisticCardUI from '@/components/StatisticCard/StatisticCardUI';
// import StatisticCardUI from '@/components/StatisticCard/StatisticCardUI';
import statisticCardProps from '@/components/StatisticCard/type';
import Link from 'next/link';

// export const slideShowData: slideShowProps[] = [
//   { image: '/assets/homepageImage/CielEtJardinTower.jpeg' },
//   { image: '/assets/slideshowimage/slideshowimage.png' },
//   { image: '/assets/slideshowimage/decoration.png' },
// ];

const slideShowData = {
  image: [{ src: '/assets/slideshowimage/apartment1.png' }],
};
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
    <div className='w-full h-full bg-white'>
      {/* <div className='relative customSpacing'>
        <div className='flex flex-col h-full gap-4 '>
          <h1 className='font-syne-bold text-[#1C2C41] text-[5rem]'>
            Luxury living <br className='hidden md:block' /> experiences
          </h1>
          <p className='w-full md:w-[60%] text-lg font-open-sans textPrimary'>
            Welcome to our premier property and client-realtor management
            platform, where innovation meets efficiency and seamless
            collaboration. Designed to redefine real estate operations, our
            solution empowers professionals to manage properties, tenants, and
            client relationships with ease, setting a new standard for success
            in the modern real estate industry.
          </p>
        </div>
        <div className='w-full h-full rounded-[8px] border-2 border-red-500'>
          <SlideShow image={slideShowData.image} />
        </div>
      </div> */}
      {/* <div className='fixed bottom-0 w-full  bg-[#1C2C41] text-white py-4  flex items-center'>
        {statisticData.map((items, index) => (
          <div className='customSpacing'>
            <StatisticCardUI
              id={items.id}
              status={items.status}
              value={items.value}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

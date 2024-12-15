import SlideShow from '@/components/SlideShow/SlideShow';
import slideShowProps from '@/components/SlideShow/type';
import StatisticCardUI from '@/components/StatisticCard/StatisticCardUI';
import statisticCardProps from '@/components/StatisticCard/type';
import Link from 'next/link';

export default function Home() {
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

  const slideImage = [
    '/assets/homepageImage/CielEtJardinTower.jpeg',
    '/assets/slideshowimage/slideshowimage.png',
  ];

  const slideShowData: slideShowProps[] = [
    {
      img: slideImage,
    },
  ];
  return (
    <>
      <div className='flex w-full h-full bg-white customSpacing'>
        <div className='flex flex-col gap-4 mt-12'>
          <h1 className='font-syne-bold text-[#1C2C41] text-[5rem]'>
            Luxury living <br className='hidden md:block' /> experiences
          </h1>
          <p className='w-full text-lg md:w-[60%] font-open-sans textPrimary'>
            Welcome to our premier property and client-realtor management
            platform, where innovation meets efficiency and seamless
            collaboration. Designed to redefine real estate operations, our
            solution empowers professionals to manage properties, tenants, and
            client relationships with ease, setting a new standard for success
            in the modern real estate industry.
          </p>
        </div>
        <div className='w-full border-2 border-red-500'>
          <SlideShow img={slideShowData.img} />
        </div>
      </div>
      <div className='bg-[#1c2c41]  flex items-center gap-24 customSpacing'>
        {statisticData.map((items, index) => (
          <StatisticCardUI
            status={items.status}
            value={items.value}
            id={index}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

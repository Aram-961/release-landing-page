'use client';
import SlideShow from '@/components/SlideShow/SlideShow';
import StatisticCardUI from '@/components/StatisticCard/StatisticCardUI';
import statisticCardProps from '@/components/StatisticCard/type';

const slideShowData = {
  image: [{ src: '/assets/slideshowimage/apartment1.png' }],
};

const images = [
  { src: '/assets/slideshowimage/apartment1.png' },
  { src: '/assets/slideshowimage/apartment1.png' },
  { src: '/assets/slideshowimage/apartment1.png' },
  { src: '/assets/slideshowimage/apartment1.png' },
  { src: '/assets/slideshowimage/apartment1.png' },
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
    <div className='relative flex flex-col justify-between w-full h-full'>
      <div className='relative flex items-center w-full h-full px-2 md:customSpacing'>
        <div className='flex flex-col gap-2 my-14'>
          <h1 className='font-syne-bold text-[4rem] textPrimary'>
            Elevating Luxury, <br className='hidden md:block' /> Effortlessly
            Managed
          </h1>
          <p className='font-open-sans w-full  textPrimary text-[1rem] md:w-[50%]'>
            Welcome to our premier client management platform, where trust meets
            innovation. Designed for efficiency and ease, our app redefines how
            you manage appointments and property listings, offering a seamless
            experience for modern real estate professionals.
          </p>
        </div>
        {/* image scroller */}
        <div className='my-24 w-[600px] h-[600px] fixed right-5  top-0  rounded-[8px] overflow-hidden z-20'>
          <SlideShow image={images} />
        </div>
      </div>
      <div className='bg-[#1C2C41] fixed bottom-0 left-0 w-full h-[200px] z-10'>
        <div className='flex items-center w-full h-full gap-16 mx-auto customSpacing '>
          {statisticData.map((stats, index) => (
            <StatisticCardUI
              key={index}
              status={stats.status}
              id={stats.id}
              value={stats.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className='fixed bottom-0 w-full  bg-[#1C2C41] text-white py-4  flex items-center'>
  {statisticData.map((items, index) => (
    <div className='customSpacing'>
      <StatisticCardUI
        id={items.id}
        status={items.status}
        value={items.value}
      />
    </div>
  ))}
</div> */
}

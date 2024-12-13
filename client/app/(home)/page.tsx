import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col justify-between h-full '>
      <div className='w-full h-full px-4 bg-white '>
        <div className='flex flex-col gap-4'>
          <h1 className='font-syne-bold text-[#1C2C41] text-[5rem]'>
            Luxury living <br className='hidden md:block' /> experiences
          </h1>
          <p className='w-full text-lg md:w-1/2 font-open-sans textPrimary'>
            Welcome to our premier property and client-realtor management
            platform, where innovation meets efficiency and seamless
            collaboration. Designed to redefine real estate operations, our
            solution empowers professionals to manage properties, tenants, and
            client relationships with ease, setting a new standard for success
            in the modern real estate industry.
          </p>
        </div>
      </div>
      {/* <div className='bg-[#1C2C41] p-10 h-[250px] px-4'></div> */}
    </div>
  );
}

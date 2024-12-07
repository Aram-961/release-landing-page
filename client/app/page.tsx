import Link from 'next/link';

export default function Home() {
  return (
    <div className='px-4'>
      <div className='w-full h-full bg-white '>
        <div className='flex flex-col gap-4'>
          <h1 className='font-syne-bold text-[#1C2C41] text-[5rem]'>
            Luxury living <br className='hidden md:block' /> experiences
          </h1>
          <p className='w-1/2 font-sans text-lg'>
            Welcome to our premier property and client-realtor management
            platform, where innovation meets efficiency and seamless
            collaboration. Designed to redefine real estate operations, our
            solution empowers professionals to manage properties, tenants, and
            client relationships with ease, setting a new standard for success
            in the modern real estate industry.
          </p>
        </div>
      </div>
    </div>
  );
}

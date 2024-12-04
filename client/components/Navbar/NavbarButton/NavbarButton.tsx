'use client';
type ArrowButtonProps = {
  ArrowIcon: React.ReactNode;
};
const NavbarButton = ({ ArrowIcon }: ArrowButtonProps) => {
  return (
    <div className='flex items-center justify-center  rounded-full border-[1px] border-[#1C2C41] w-[40px] cursor-pointer h-[40px]'>
      <div>{ArrowIcon}</div>
    </div>
  );
};

export default NavbarButton;

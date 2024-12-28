export const ArrowRight = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 10.6113C4.44772 10.6113 4 11.059 4 11.6113C4 12.1636 4.44772 12.6113 5 12.6113V10.6113ZM5 12.6113L18 12.6113V10.6113L5 10.6113V12.6113Z'
        fill='#1C2C41'
      />
      <path
        d='M14.3887 8L17.9998 11.6111L14.3887 15.2222'
        stroke='#1C2C41'
        strokeWidth='2'
        stroke-linecap='round'
      />
    </svg>
  );
};

export const ArrowLeft = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 12.6108C18.5523 12.6108 19 12.1631 19 11.6108C19 11.0586 18.5523 10.6108 18 10.6108V12.6108ZM18 10.6108H5V12.6108H18V10.6108Z'
        fill='#1C2C41'
      />
      <path
        d='M8.61133 15.2222L5.00022 11.6111L8.61133 7.99994'
        stroke='#1C2C41'
        strokeWidth='2'
        stroke-linecap='round'
      />
    </svg>
  );
};

interface HamburgerMenuProps {
  onClick?: () => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <svg
      width='68'
      height='68'
      viewBox='0 0 68 68'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
    >
      <path d='M20 29H48' stroke='#1C2C41' strokeWidth='2.2' />
      <path d='M20 40H39.0909' stroke='#1C2C41' strokeWidth='2.2' />
    </svg>
  );
};

export const CloseIcon: React.FC<HamburgerMenuProps> = ({ onClick }) => (
  <svg
    onClick={onClick}
    width='71'
    height='71'
    viewBox='0 0 71 71'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M45.191 26.809L26.809 45.1911' stroke='#F4F3EF' strokeWidth='3' />
    <path d='M45.191 45.191L26.809 26.809' stroke='#F4F3EF' strokeWidth='3' />
  </svg>
);

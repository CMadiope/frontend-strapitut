import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg text-black relative'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <div className='text-4xl ml-10 md:ml-3 '>TWC</div>
        <div className='flex item-center '>
          <ul className='hidden md:flex '>
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='hidden md:flex sm:mr-10 md:mr-10'>
          <button className='border-none bg-transparent text-black mr-4'>
            Login
          </button>
          <button className='px-8 py-3'>Sign up</button>
        </div>
        <div className='md:hidden mr-10 cursor-pointer' onClick={handleClick}>
          {nav ? <RxCross1 /> : <AiOutlineMenu />}
        </div>
      </div>
      <ul
        className={nav ? "absolute bg-white w-full px-8 md:hidden" : "hidden"}
      >
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>Platform</li>
        <li>Pricing</li>
        <div className='flex flex-col my-4 gap-4  '>
          <button className=' bg-transparent text-black py-3 px-8'>
            Login
          </button>
          <button className='px-8 py-3'>Sign up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

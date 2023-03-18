import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg text-black'>
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto">
        <div className="text-4xl ml-10 md:ml-3 ">
          TWC
        </div>
        <div className="flex item-center ">
          <ul className="hidden md:flex ">
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Support
            </li>
            <li>
              Platform
            </li>
            <li>
              Pricing
            </li>
          </ul>
        </div>
        <div className="hidden md:flex sm:mr-10 md:mr-10">
          <button className="border-none bg-transparent text-black mr-4">Login</button>
          <button className="px-8 py-3">Sign up</button>
        </div>
        <div className="md:hidden mr-10">
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

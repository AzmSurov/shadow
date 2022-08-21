/* eslint-disable react/style-prop-object */
import React, {useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {CgClose} from 'react-icons/cg'
import {AiOutlineTwitter} from 'react-icons/ai'
import Avvvatars from "avvvatars-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
  
    const twtlink =
      "https://twitter.com/intent/tweet?text=Checkout%20gradientify.com%20by%20@thenitinsingh7%0A%0AGradientify%20is%20a%20web-based%20all-in-one%20gradient%20editor%20that%20provides%20100+%20trendy,%20beautiful,%20carefully%20crafted%20gradients%20for%20your%20next%20projects.%20Copy%20CSS%20Snippet,%20Download%20PNGs,%20generates%20a%20nice%20color%20gradient,%20and%20much%20more";
  
    return (
        <>
 
      <div className="card navbar-container transition duration-300" >
        <div className="w-full px-6 py-2 flex items-center justify-between">
          <div className="flex justify-start items-center">
            <div>
              <div className="flex items-center justify-center gap-2 ">
              <Link  to="/"className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
              <div className='hover:animate-spin'>
              <Avvvatars value="best_user@gmail.com" style="shape" size={35} />
              </div>
      <span className="ml-3 text-xl text-white">Shadow UI</span>
    </Link>
              </div>
            </div>
          </div>
          <div className="lg:flex xl:flex flex-auto items-center justify-end md:space-x-6 hidden">
          <div className='hover:scale-125 transition ease-in-out delay-125"'>
              <Link to="/text-gradient">
              <div  >
              <p className='font-medium  continuous-line text-xl font-Epilogue  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>Text Gradients</p>
              </div>
              </Link>
            </div>
            <div>
              <p className="text-xl text-white continuous-line font-medium font-Epilogue">
              Tailwind Colors & Shades
              </p>
            </div>
  
            <div>
              <p className="text-xl font-medium continuous-line font-Epilogue text-white">
                Gradient Generator
              </p>
            </div>
            <div>
              <p className="text-[16px] font-medium continuous-line font-Epilogue text-white">
                About
              </p>
            </div>
            <div className="md:flex items-center hidden justify-center space-x-[12px]">
            <a
              href={twtlink}
              target="_blank"
              rel="noreferrer"
              className="text-[17px] font-medium lg:flex hidden continuous-line font-Epilogue text-white"
            >
              <AiOutlineTwitter className='text-cyan-600' size={30} />
            </a>
            {/* <TwtBtn /> */}
          </div>
          </div>
  

  
          <button className="rounded-md block lg:hidden xl:hidden">
            <div
              className={`text-white duration-500 px-3 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-toggle ${
                showNav && "menu-toggle-active"
              }`}
              onClick={() => setShowNav(!showNav)}
            >
              <span className='pb-8'>{!showNav ? <GiHamburgerMenu size={30}/> : <CgClose size={30}/>}</span>
            </div>
          </button>
        </div>
  
        {showNav && (
          <div className="flex lg:hidden xl:hidden md:hidden flex-col w-full text-center mt-3 p-[16px] divide-y-4 divide-slate-400/25">
            <div onClick={() => setShowNav(!showNav)}>
              <p className="p-2 w-full flex items-center justify-center border-4 border-x-0 border-b-0 border-slate-400/25 ">
                <h3 className="text-[16px] font-medium text-center text-white hover:scale-125 transition ease-in-out delay-150 cursor-pointer  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  ">
                  <Link to="/text-gradient">
                  Text Gradients
                  </Link>
                </h3>
              </p>
            </div>
            <div onClick={() => setShowNav(!showNav)}>
              <p className="p-2 w-full flex items-center justify-center ">
                <h3 className="text-[16px] font-medium text-center text-white hover:scale-125 transition ease-in-out delay-150 cursor-pointer   ">
                  Tailwind Colors and Shades
                </h3>
              </p>
            </div>
  
            <div onClick={() => setShowNav(!showNav)}>
              <p className="p-2 w-full flex items-center justify-center ">
                <h3 className="text-[16px] font-medium text-center text-white hover:scale-125 transition ease-in-out delay-150 cursor-pointer   ">
                  Gradient Generator
                </h3>
              </p>
            </div>
  
  
            <div onClick={() => setShowNav(!showNav)}>
              <p className="p-2 w-full flex items-center justify-center border-4 border-x-0 border-t-0 border-slate-400/25 ">
                <h3 className="text-[16px] font-medium text-center text-white hover:scale-125 transition ease-in-out delay-150 cursor-pointer   ">
                  About
                </h3>
              </p>
            </div>
          </div>
        )}
      </div>
      </>
    );
  };
  
  export default Navbar;
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
      "https://twitter.com/intent/tweet?url=&text=Check%20out%20tailwind-gradients.netlify.com%20by%20%40Swrov%20Beautifully%20crafted%20tailwind%20gradient%20backgrounds%20and%20texts%20for%20your%20next%20project!";
  
    return (
        <>
 
      <div className="card container mx-auto lg:px-2 px-10 transition duration-300" >
        <div className="w-full  py-2 flex items-center justify-between">
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
                <h3 className="text-[16px] font-medium text-center hover:scale-125 transition ease-in-out delay-150 cursor-pointer  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  ">
                  <Link to="/text-gradient">
                  Text Gradients
                  </Link>
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
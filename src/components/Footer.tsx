/* eslint-disable react/style-prop-object */
import React from 'react'
import Avvvatars from "avvvatars-react";
import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='container mx-auto'>
      <footer className="text-white body-font">
  <div className=" px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <Link to='/'>
  <Avvvatars value="best_user@gmail.com" style="shape" size={35} />
      
  </Link><span className="ml-3 text-xl">Shadow UI</span>

    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} —
      <a href="https://www.azms.me" className="text-white ml-1" rel="noopener noreferrer" target="_blank">Azm Mohibul Haque Surov</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://www.azms.me"  className="ml-3 text-gray-500">
     <FaGithub size={30}/>
      </a>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
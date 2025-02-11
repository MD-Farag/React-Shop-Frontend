import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// assets
import { assets } from '../../assets/assets'

const PageNav = () => {
  const menuRefMen = useRef()
  const [openMenu, setOpenMenu] = useState(false)
  const handleNavMenu = (e) => {
    if (openMenu) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true)
    }
  }

  const closeOutside = (e) => {
    if (!menuRefMen.current.contains(e.target)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeOutside);

    return () => {
      document.removeEventListener('click', closeOutside);
    };
  }, []);

  return (
    <>
      <nav className='main container flex justify-between items-center max-sm:text-white max-sm:h-[75px] sm:h-[80px] md:h-[90px] lg:h-[95px] xl:h-10px sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-14 sm:text-black relative mx-auto max-2xl:px-4'>
        <Link to="/" className="flex items-start sm:items-end">
          <img src={assets.logoBlack} alt="e-shop logo" className="mr-3 w-[32px] sm:hidden" />
          <img src={assets.logoBlack} alt="e-shop logo" className="hidden mr-5 max-w-[40px] sm:block" />
          <span className="text-lg md:text-xl font-normal text-black">
            <span className="text-[#fbb03c]">E-</span>Shop
          </span>
        </Link>
        <div ref={menuRefMen} className={`${openMenu ? "max-sm:scale-100 max-sm:opacity-100 z-10" : "z-10 max-sm:opacity-0 max-sm:scale-0"} flex duration-500 max-sm:shadow-md max-sm:border-2 max-sm:boreder-black max-sm:flex-col max-sm:items-center max-sm:h-auto max-sm:py-10 max-sm:w-full max-sm:max-w-[300px] max-sm:left-[50%] max-sm:-translate-x-[50%] max-sm:rounded-lg max-sm:bg-[#fbb03c] max-sm:absolute max-sm:top-[85px] sm:flex sm:flex-row sm:w-1/4 sm:justify-center`}>
          <Link to="/category/men" className="max-sm:mb-14" onClick={handleNavMenu}>
            <span className="text-sm md:text-base font-semibold cursor-pointer">Men</span>
          </Link>
          <Link to="/category/women" className="max-sm:mb-14" onClick={handleNavMenu}>
            <span className="text-sm md:text-base font-semibold cursor-pointer sm:ml-10 md:ml-16 lg:ml-24 xl:ml-32">Women</span>
          </Link>
          <Link to="/category/kids" className="max-sm:mb-14" onClick={handleNavMenu}>
            <span className="text-sm md:text-base font-semibold cursor-pointer sm:ml-10 md:ml-16 lg:ml-24 xl:ml-32">Kids</span>
          </Link>
          <Link to="/user" className="" onClick={handleNavMenu}>
            <img src={assets.user} alt="user icon" className="w-[24px] h-[24px] cursor-pointer sm:hidden" />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <Link to="/search">
            <img src={assets.searchBlack} alt="search icon" className="ml-8 w-[24px] h-[24px] cursor-pointer sm:hidden" />
            <img src={assets.searchBlack} alt="search icon" className="ml-8 w-[24px] h-[24px] md:w-[25px] cursor-pointer hidden sm:block" />
          </Link>
          <Link to="/cart">
            <img src={assets.cartBlack} alt="cart icon" className="ml-8 w-[24px] h-[24px] cursor-pointer sm:hidden" />
            <img src={assets.cartBlack} alt="cart icon" className="ml-8 w-[24px] h-[24px] md:w-[25px] cursor-pointer hidden sm:block" />
          </Link>
          <button ref={menuRefMen} id="menu-btn" className={`${openMenu ? "open flex group rotate-90 translate-y-0" : ""} relative transition-all duration-[0.25s] ml-8 h-[24px] w-[24px] sm:hidden cursor-pointer focus:outline-none`} onClick={handleNavMenu}>
            <span className={`${openMenu ? "rotate-45 translate-y-[12px] translate-x-0" : ""} absolute left-0 top-[3px] w-[26px] h-[2px] bg-black rotate-0 transition-all duration-[0.5s]`}></span>
            <span className={`${openMenu ? "hidden" : ""} absolute left-0 top-[4px] w-[26px] h-[2px] bg-black rotate-0 transition-all duration-[0.5s] translate-y-[7px]`}></span>
            <span className={`${openMenu ? "rotate-[-45deg] !translate-y-[12px] translate-x-0" : ""} absolute left-0 top-[5px] w-[26px] h-[2px] bg-black rotate-0 transition-all duration-[0.5s] translate-y-[14px]`}></span>
          </button>
          <Link to="/user"> <img src={assets.userBlack} alt="user icon" className="ml-8 w-[24px] h-[24px] md:w-[25px] cursor-pointer hidden sm:block" /></Link>
        </div>
      </nav>
      <hr className="bg-[#EBEBEB] h-[1px] absolute max-sm:top-[75px] z-10 left-0 w-full" />
    </>
  )
}

export default PageNav
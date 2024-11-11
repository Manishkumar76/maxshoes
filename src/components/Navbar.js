import React, { useState } from "react";
import logo from '../assets/logo/Max_Shoes.png';
import ProfileMenu from "./profile-menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="relative">
      <nav className="relative shadow bg-white dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a href="/">
                <img className="w-auto h-14 sm:h-14" src={logo} alt="logo" />
              </a>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 focus:outline-none"
                  aria-label="toggle menu"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Desktop & Mobile Menu */}
            <div
              className={`${
                isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-400 ease-in-out bg-white dark:bg-gray-800 h-100 lg:mt-0 lg:p-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <a href="/" className="px-3  rounded-md py-2 mx-3 mt-2 text-blue-600 lg:mt-0 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700">Home</a>
                <a href="/products" className="px-3 rounded-md py-2 mx-3 mt-2 text-blue-600 lg:mt-0 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700">Products</a>
                <a href="/about" className="px-3 rounded-md py-2 mx-3 mt-2 text-blue-600 lg:mt-0 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700">About us</a>
                <a href="/contact" className="px-3 rounded-md py-2 mx-3 mt-2 text-blue-600 lg:mt-0 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700">Contact us</a>
              </div>

              <div className="flex items-center mt-4 lg:mt-0 relative">
                <div className="flex justify-center md:block pr-8">
                  <a
                    className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                    href="/cart"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute top-0 left-0 p-1 text-xs text-white shadow-lg shadow-red-300 bg-red-500 rounded-full "></span>
                  </a>

                </div>

                {/* Profile Dropdown */}
                <button
                  onClick={() => setIsShow(!isShow)}
                  type="button"
                  className="flex items-center focus:outline-none relative"
                  aria-label="toggle profile dropdown"
                >
                  <div className="w-8 h-8 overflow-hidden border-2 border-white rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>
                  <h3 className="mx-2 text-blue-600 lg:hidden">User Name</h3>
                </button>

                {isShow && (
                  <ProfileMenu />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;



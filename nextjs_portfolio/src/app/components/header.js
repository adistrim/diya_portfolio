"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="my-5 text-black"
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: 'transparent',
      }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <div className="tracking-widest font-semibold hover:text-[#68B3A3]">
          <Link href="/">HOME</Link>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            className="block text-gray-800 hover:text-[#68B3A3] focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current transition-transform duration-300"
              viewBox="0 0 24 24"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`${isOpen ? 'block' : 'hidden'
            } md:flex md:items-center md:space-x-[3rem] md:font-light transition-all duration-500 ease-in-out`}
          style={{ maxHeight: isOpen ? '500px' : '0' }}
        >
          <Link
            href="#intro"
            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3] md:p-0"
          >
            INTRO
          </Link>
          <Link
            href="#projects"
            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3] md:p-0"
          >
            PROJECTS
          </Link>
          <Link
            href="#blogs"
            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3] md:p-0"
          >
            BLOGS
          </Link>
          <Link
            href=""
            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3] md:p-0"
          >
            RESUME
          </Link>
          <Link
            href="#certifications"
            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3] md:p-0"
          >
            CERTIFICATIONS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
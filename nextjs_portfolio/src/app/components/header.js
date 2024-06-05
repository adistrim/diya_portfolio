"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = ['intro', 'projects', 'blogs', 'resume', 'certifications'];
    const sectionElements = sections.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else {
            setActiveSection('');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionElements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <header
        className="my-5 text-black relative bg-gradient-to-b from-white/60 via-white/40 to-transparent backdrop-filter backdrop-blur-sm"
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: 100,
          backgroundColor: 'transparent',
        }}
      >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        <div className="cursor-pointer tracking-widest font-semibold hover:text-[#68B3A3]">
          <p onClick={scrollToTop} >HOME</p>
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
          <a
            href="#intro"
            className={`block py-2 pr-4 pl-3 md:p-0 ${activeSection === 'intro' ? 'text-[#68B3A3]' : 'text-gray-700'} hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3]`}
            onClick={(e) => handleScroll(e, 'intro')}
          >
            INTRO
          </a>
          <a
            href="#projects"
            className={`block py-2 pr-4 pl-3 md:p-0 ${activeSection === 'projects' ? 'text-[#68B3A3]' : 'text-gray-700'} hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3]`}
            onClick={(e) => handleScroll(e, 'projects')}
          >
            PROJECTS
          </a>
          <a
            href="#blogs"
            className={`block py-2 pr-4 pl-3 md:p-0 ${activeSection === 'blogs' ? 'text-[#68B3A3]' : 'text-gray-700'} hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3]`}
            onClick={(e) => handleScroll(e, 'blogs')}
          >
            BLOGS
          </a>
          <a
            href="#resume"
            className={`block py-2 pr-4 pl-3 md:p-0 ${activeSection === 'resume' ? 'text-[#68B3A3]' : 'text-gray-700'} hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3]`}
            onClick={(e) => handleScroll(e, 'resume')}
          >
            RESUME
          </a>
          <a
            href="#certifications"
            className={`block py-2 pr-4 pl-3 md:p-0 ${activeSection === 'certifications' ? 'text-[#68B3A3]' : 'text-gray-700'} hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#68B3A3]`}
            onClick={(e) => handleScroll(e, 'certifications')}
          >
            CERTIFICATIONS
          </a>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;

"use client";
import React from 'react';
import { FaKaggle, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import GreenButton from './greenButton';

const LandingArea = () => {
  const handleScroll = () => {
    const element = document.getElementById('contact');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleArrScroll = () => {
    const element = document.getElementById('intro');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white text-black">
      <div className="text-center px-6 md:px-0">
        <h1 className="text-3xl md:text-4xl font-semibold mb-[1rem]">
          🦄 DIYA MATHUR 🍩
        </h1>
        <hr className="w-1/4 mx-auto my-[2rem]" />
        <div className="flex justify-center space-x-6 my-4">
          <Link
            href="https://www.linkedin.com/in/diyamth29/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={24} className="hover:text-[#68B3A3]" />
          </Link>
          <Link
            href="https://github.com/diyamth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="hover:text-[#68B3A3]" />
          </Link>
          <Link
            href="https://www.kaggle.com/diyamathur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaKaggle size={24} className="hover:text-[#68B3A3]" />
          </Link>
        </div>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-10">
          👋 Hi, I&apos;m a undergrad software engineer fueled by curiosity. I love tinkering with data and figuring out how to teach machines some cool tricks, sometimes it works 🐼
        </p>
        <GreenButton content="Contact" onClick={handleScroll} />
      </div>
      <div className="mt-20">
        <button
          onClick={handleArrScroll}
          className="text-xl text-[#68B3A3] animate-bounce"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default LandingArea;
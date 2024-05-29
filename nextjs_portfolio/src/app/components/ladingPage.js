"use client";
import React from 'react';
import { FaKaggle, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const LandingPage = () => {
    const handleScroll = () => {
        const element = document.getElementById('contact');
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const handleArrScroll = () => {
        const element = document.getElementById('intro');
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center text-center bg-white text-black">
            <h1 className="text-4xl font-semibold mb-[1rem]">🦄 DIYA MATHUR 🍩</h1>
            <hr className="w-1/4 my-[2rem]" />
            <div className="flex space-x-6 my-4">
            <Link href="https://www.linkedin.com/in/diyamth29/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={30} className="hover:text-[#68B3A3]" />
                </Link>
                <Link href="https://github.com/diyamth" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} className="hover:text-[#68B3A3]" />
                </Link>
                <Link href="https://www.kaggle.com/diyamathur" target="_blank" rel="noopener noreferrer">
                    <FaKaggle size={30} className="hover:text-[#68B3A3]" />
                </Link>
            </div>
            <p className="text-lg max-w-xl mb-10">
                👋 Hi! I&apos;m a freelance software engineer specializing in data science and machine learning. I&apos;ve worked on many projects. I&apos;m open to work on any exciting project right now. 🐼
            </p>
            <button
                className="mt-6 py-2 px-4 bg-[#68B3A3] text-white rounded hover:bg-[#68B3A3] hover:opacity-80"
                onClick={handleScroll}
            >
                Contact
            </button>
            <div className="mt-20">
                <button onClick={handleArrScroll} className="text-xl text-[#68B3A3] animate-bounce">
                    ↓
                </button>
            </div>
            <div id="contact" className="mt-20 text-black">
                {/* <h2 className="text-2xl">Contact Me</h2> */}
                {/* Add your contact form or contact information here */}
            </div>
        </div>
    );
};

export default LandingPage;

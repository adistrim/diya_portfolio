"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Intro = () => {
  return (
    <div id="intro" className="flex flex-col justify-center items-center min-h-screen bg-[#F8F9FA] text-black p-4 md:p-12 lg:p-16">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center mb-8 md:mb-0">
          <Image
            src="/diya_mathur.png"
            alt="Diya Mathur"
            width={300}
            height={300}
            className="rounded-md shadow-lg max-w-full"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 md:pl-8 lg:pl-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Hi, I&apos;m Diya.</h2>
          <p className="text-sm md:text-base">
          I&apos;m specializing in data science and machine learning. My academic journey has been a thrilling exploration of technology, from writing code to working on machine-learning algorithms and working on amazing projects at{' '}
          <Link
              href="https://www.jklu.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#68B3A3] underline hover:text-black"
            >
              JK Lakshmipat University, Jaipur
            </Link>
            .
          </p>
          <br />
          <p className="text-sm md:text-base">
            As I&apos;m near the completion of my undergraduate studies, I&apos;m excited to bring my knowledge and passion to the industry. I look forward to engaging in projects, learning from professionals, and contributing to the open source.
          </p>
          <br />
          <p className="text-sm md:text-base">I&apos;m currently working as a Machine Learning Intern at Blueberry Capital.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
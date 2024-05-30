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
          <p className="text-base md:text-lg mb-4">
            I specialize in helping companies and researchers analyze and visualize their datasets. I
            excel in data visualization. If you&apos;re looking for guidance on presenting your results or
            building complex interactive charts, I&apos;m the expert you&apos;re seeking.
          </p>
          <p className="text-base md:text-lg mb-4">
            With a solid 2-year track record in data science, I&apos;ve collaborated & worked on many
            projects. Right now I&apos;m in my 4th year of B.Tech. in Computer Science & Engineering at{' '}
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
          <p className="text-base md:text-lg">I&apos;m now working as a X at something.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
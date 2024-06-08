"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const Intro = () => {
  return (
    <div id="intro" className="flex flex-col justify-center items-center min-h-screen bg-[#F8F9FA] text-black p-4 md:p-12 lg:p-16">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center mb-8 md:mb-0">
          <Image
            src="/diya_mathur.png"
            alt="Diya Mathur"
            width={400}
            height={400}
            className="rounded-md shadow-lg max-w-full"
          />
        </div>
        <div className="w-full md:w-2/3 lg:w-3/4 md:pl-8 lg:pl-12 text-center md:text-left">
          <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${robotoSlab.className} `}>I&apos;m Diya 👩🏽‍💻</h2>
          <p className={`text-sm md:text-base ${robotoSlab.className}`}>
          Data&apos;s ability to weave narratives and fuel innovation has always captivated me. My academic journey has been an exploration of tech, where I worked on my coding skills, studied machine learning algorithms, and brought them to life through cool projects at{' '}
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
          <p className={`text-sm md:text-base ${robotoSlab.className}`}>
          Now, nearing the completion of my undergraduate studies, I&apos;m eager to bridge this academic foundation with the world of professional practice. And, now I&apos;m a growing Software Engineer.
          </p>
          <br />
          <p className={`text-sm md:text-base ${robotoSlab.className}`}>
          Currently, I&apos;m working at Blueberry Capital as a Machine Learning Intern.</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
"use client";
import React from 'react';
import GreenButton from './greenButton';

const Contact = () => {
    return (
        <section id='contact' className="flex flex-col justify-center items-center min-h-screen bg-[#F8F9FA] py-8 px-4">
            <div className='max-w-3xl'>
                <h2 className="text-4xl font-semibold text-center mb-4">CONTACT</h2>
                <p className="text-gray-700 italic text-center mb-8">
                Interested in working together or simply want to chat about technology and innovation?
                <br />
                I'm just a message away!📧
                </p>
                <p className='text-center'>
                    For open source projects, please open an issue or pull request on{' '}
                    <span className="text-[#68B3A3] font-semibold">Github</span>.
                    If you want to follow my work, reach me on{' '}
                    <span className="text-[#68B3A3] font-semibold">Medium</span>.
                    Otherwise, send me an email at{' '}
                    <span className="text-[#68B3A3] font-semibold">diyamathur1229@gmail.com</span>.
                </p>
            </div>
            <hr className="w-1/4 mx-auto my-[2rem]" />
            <div className='space-x-3' >
                <GreenButton content="Github" href="https://github.com/diyamth" />
                <GreenButton content="Medium" href="https://medium.com" />
            </div>
        </section>
    );
};

export default Contact;

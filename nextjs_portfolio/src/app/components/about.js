import Image from 'next/image';

const About = () => {
    return (
        <div className="min-h-screen bg-[#D1ADEE] flex flex-col items-center justify-center py-12 relative">
            <div className="relative w-full flex justify-center items-center mb-8">
                <h1 className="text-9xl font-semibold text-[#D2B2EE]">About Me</h1>
                <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                    <h1 className="text-6xl font-semibold text-[#544274]">About Me</h1>
                </div>
            </div>

            <div className="container space-x-6 mx-auto flex flex-col lg:flex-row items-center relative">
                <div className="relative w-full lg:w-[30%] mb-8 lg:mb-0 flex justify-center lg:justify-start">
                    <div className="relative">
                        <Image src="/frame.png" width={320} height={400} alt="Frame" />
                        <div className="absolute -top-5 -left-5">
                            <Image src="/diya_mathur.png" alt="Diya Mathur" width={320} height={400} />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[70%] text-[#544274] text-center lg:text-left">
                    <p className="text-xl mb-4">
                        Hi, I&apos;m <span className='font-bold'>Diya Mathur</span>, passionate about teaching machines to learn and making them more intelligent. I&apos;m currently
                        exploring various aspects of artificial intelligence and machine learning.
                    </p>
                    <p className='text-xl'>Ongoing Bachelor&apos;s in Computer Science from JK Lakshmipat University</p>
                </div>
            </div>
        </div>
    );
};

export default About;

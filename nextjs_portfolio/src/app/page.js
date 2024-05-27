import Image from 'next/image';
import Link from 'next/link';
import About from './components/about';

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#D8C1EB] flex items-center justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="relative w-full lg:w-6.5/10 mb-8 lg:mb-0" style={{ height: 'auto', aspectRatio: '4 / 3' }}>
            <Image src="/nn.png" alt="Neural Network" fill />
          </div>
          <div className="w-full lg:w-3.5/10 text-center lg:text-left">
            <h1 className="text-[3rem] mb-2 text-[#544274]">I&apos;m <span className='font-bold'>DIYA</span> Mathur</h1>
            <p className="text-[1.5rem] font-light mb-6 text-[#272729]">learning to teach machines</p>
            <Link href="/contact" className="inline-block bg-[#652F8F] text-white py-2 px-4 rounded-lg hover:bg-[#823db8]">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
{/* About section */}
      <About />
    
    </div>
  );
};

export default Home;

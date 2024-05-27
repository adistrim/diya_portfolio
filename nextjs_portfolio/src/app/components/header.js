import Link from 'next/link';
import { Syncopate } from 'next/font/google';

const syncopate = Syncopate({ subsets: ['latin'], weight: ['400', '700'] });

const Header = () => {
  return (
    <header className="bg-[#E0CFEE] border-b border-[#E5E1E6] text-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className={`text-[2rem] font-thin tracking-widest ${syncopate.className}`}>
          <Link href="/">DIYA</Link>
        </div>
        <nav className="space-x-[3rem] font-light underline-offset-[2.1rem]">
          <Link href="/projects" className="hover:text-white hover:underline">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white hover:underline">
            About
          </Link>
          <Link href="/resume" className="hover:text-white hover:underline">
            Resume
          </Link>
          <Link href="/blogs" className="hover:text-white hover:underline">
            Blogs
          </Link>
          <Link href="/certifications" className="hover:text-white hover:underline">
            Certifications
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

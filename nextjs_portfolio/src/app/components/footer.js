import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaKaggle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="tracking-widest font-semibold hover:text-[#68B3A3] mb-4 md:mb-0">
            <Link href="/">HOME</Link>
          </div>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 mb-4 md:mb-0">
            <Link href="#intro" className="hover:text-[#68B3A3] text-center md:text-left">
              INTRO
            </Link>
            <Link href="#projects" className="hover:text-[#68B3A3] text-center md:text-left">
              PROJECTS
            </Link>
            <Link href="#blogs" className="hover:text-[#68B3A3] text-center md:text-left">
              BLOGS
            </Link>
            <Link href="" className="hover:text-[#68B3A3] text-center md:text-left">
              RESUME
            </Link>
            <Link href="#certifications" className="hover:text-[#68B3A3] text-center md:text-left">
              CERTIFICATIONS
            </Link>
          </nav>
          <div className="flex items-center space-x-5 mt-20 md:mt-0">
            <Link
              href="https://www.linkedin.com/in/diyamth29/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#68B3A3]"
            >
              <FaLinkedinIn size={24} />
            </Link>
            <Link
              href="https://github.com/diyamth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#68B3A3]"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.kaggle.com/diyamathur"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#68B3A3]"
            >
              <FaKaggle size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-[5rem] font-light text-center">
          <p>&copy; {new Date().getFullYear()} Diya Mathur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#D1ADEE] text-[#544274] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <span className="text-2xl font-bold cursor-pointer">Diya Mathur</span>
            </Link>
          </div>
          <nav>
            <ul className="flex flex-col md:flex-row">
              <li className="mb-2 md:mb-0 md:mr-6">
                <Link href="/projects">
                  <span className="hover:text-[#8C58D3] transition duration-300">Projects</span>
                </Link>
              </li>
              <li className="mb-2 md:mb-0 md:mr-6">
                <Link href="/about">
                  <span className="hover:text-[#8C58D3] transition duration-300">About</span>
                </Link>
              </li>
              <li className="mb-2 md:mb-0 md:mr-6">
                <Link href="/resume">
                  <span className="hover:text-[#8C58D3] transition duration-300">Resume</span>
                </Link>
              </li>
              <li className="mb-2 md:mb-0 md:mr-6">
                <Link href="/blogs">
                  <span className="hover:text-[#8C58D3] transition duration-300">Blogs</span>
                </Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link href="/certifications">
                  <span className="hover:text-[#8C58D3] transition duration-300">Certifications</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/in/diyamth29/" className="mr-4 hover:text-[#8C58D3] transition duration-300">
              <FaLinkedinIn size={24} />
            </Link>
            <Link href="https://github.com/diyamth" className="mr-4 hover:text-[#8C58D3] transition duration-300">
              <FaGithub size={24} />
            </Link>
            <Link href="" className="hover:text-[#8C58D3] transition duration-300">
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Diya Mathur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
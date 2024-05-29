import Link from 'next/link';

const Header = () => {
  return (
    <header className="my-5 text-black" style={{ position: "sticky", top: 0, width: "100%", zIndex: 100, backgroundColor: "transparent" }}>
      <div className="container mx-[5rem] flex justify-between items-center py-4 px-6">
        <div className="tracking-widest font-semibold hover:text-[#68B3A3] ">
          <Link href="/">HOME</Link>
        </div>
        <nav className="space-x-[3rem] font-light">
          <Link href="#intro" className="hover:text-[#68B3A3]">
            INTRO
          </Link>
          <Link href="#projects" className="hover:text-[#68B3A3]">
            PROJECTS
          </Link>
          <Link href="#blogs" className="hover:text-[#68B3A3]">
            BLOGS
          </Link>
          <Link href="" className="hover:text-[#68B3A3]">
            RESUME
          </Link>
          <Link href="#certifications" className="hover:text-[#68B3A3]">
            CERTIFICATIONS
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

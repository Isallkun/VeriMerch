import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="container my-2 mx-auto p-5 bg-[rgba(120,108,212,0.2)] rounded-full shadow-lg">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="logo justify-self-start ms-4 text-4xl text-black">LOGO</div>
        <div className="nav-links">
          <ul className="flex space-x-10 justify-self-center">
            <li>
              <Link href="#scan" className="text-black px-4 py-2 rounded-full hover:bg-[rgba(120,108,212,0.1)]">
                scan
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-black px-4 py-2 rounded-full hover:bg-[rgba(120,108,212,0.1)]">
                how it works
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-black px-4 py-2 rounded-full hover:bg-[rgba(120,108,212,0.1)]">
                about
              </Link>
            </li>
          </ul>
        </div>
        <div className="btn justify-self-end me-4">
          <button className="btn-connect rounded-full bg-[#1402FE] py-5 px-10 text-white hover:ring hover:ring-[#1402FE} ">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text bg-gray-200 h-20">
      <div className="flex flex-row items-center justify-between mx-16 h-full">
        <div className="logo text-4xl text-black">
          <Image
            src="/logo.png"
            alt="logo"
            className="logo bg-cover bg-center"
            width={40}
            height={40}
          />
        </div>
        <div className="copyright-text text-sm text-gray-600">
          <p>&copy; 2024 All Rights Reserved</p>
        </div>
        <div className="socials flex">
          <div className="flex space-x-8 text-black ">
            <div className="group relative mt-2">
              <Link href="https://www.instagram.com">
                <button className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <FaInstagram size={30} />
                </button>
                <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm text-white bg-[#1402FE] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                  @instagram {/* bisa diganti dengan nama akun */}
                </span>
              </Link>
            </div>

            <div className="group relative mt-2">
              <Link href="https://x.com/">
                <button className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <FaXTwitter size={30} />
                </button>
              </Link>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm text-white bg-[#1402FE] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                @Twitter {/* bisa diganti dengan nama akun */}
              </span>
            </div>

            <div className="group relative mt-2">
              <Link href="https://www.youtube.com">
                <button className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                  <FaYoutube size={30} />
                </button>
              </Link>
              <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm text-white bg-[#1402FE] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                Youtube {/* bisa diganti dengan nama akun */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

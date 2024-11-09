import React from "react";
import {FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-gray-200 h-20">
      <div className="flex flex-row items-center justify-between mx-16 h-full">

        <div className="logo text-4xl text-black">LOGO</div>
        <div className="copyright-text text-sm text-gray-600">
          <p>&copy; 2024 All Rights Reserved</p>
        </div>
        <div className="socials flex">
            <div className="flex space-x-8 text-black ">
                <div className="group relative mt-2">
                    <button 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                    >
                        <FaInstagram size={30} />
                    </button>
                    <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm text-white bg-[#1402FE] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                        @instagram {/* bisa diganti dengan nama akun */}
                    </span>
                </div>
                
                <div className="group relative mt-2">
                    <button 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                    >
                        <FaXTwitter size={30} />
                    </button>
                    <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm text-white bg-[#1402FE] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                        @Twitter {/* bisa diganti dengan nama akun */}
                    </span>
                </div>

                <div className="group relative mt-2">
                    <button 
                        href="https://www.instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                    >
                        <FaYoutube size={30} />
                    </button>
                    <span className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm text-white bg-[#1402FE] rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                        Youtube {/* bisa diganti dengan nama akun */}
                    </span>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}
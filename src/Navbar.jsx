"use client";

import Image from 'next/image';
import Link from 'next/link';

import { client } from "@/context/client";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { lightTheme } from "thirdweb/react";



export default function Navbar() {
  const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("com.okex.wallet"),
    createWallet("com.trustwallet.app"),
  ];

  return (
    <nav className="text my-2 mx-3 p-5 bg-[rgba(120,108,212,0.2)] rounded-full shadow-lg">
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="logo justify-self-start ms-4 text-4xl text-black">LOGO</div>
        <div className="nav-links">
          <ul className="flex space-x-10 justify-self-center">
            <li>
              <Link href="#scan" className="text-black px-8 py-2 rounded-full hover:bg-[rgba(120,108,212,0.3)] focus:bg-[#5045F4] focus:text-white text-gray-700 transition-all ease-linear"> 
                scan
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-black px-8 py-2 rounded-full hover:bg-[rgba(120,108,212,0.3)] focus:bg-[#5045F4] focus:text-white text-gray-700 transition-all ease-linear">
                how it works
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-black px-8 py-2 rounded-full hover:bg-[rgba(120,108,212,0.3)] focus:bg-[#5045F4] focus:text-white text-gray-700 transition-all ease-linear">
                about
              </Link>
            </li>
          </ul>
        </div>

        <div className="btn justify-self-end rounded-full bg-[#1402FE] py-2 px-7 text-white hover:ring-2 hover:ring-[#1402FE] active:scale-95 transition-all ease-linea">
          <ConnectButton 
            client={client} 
            wallets={wallets}
            connectButton={{ label: "Connect Wallet" }}
            connectModal={{
              size: "compact",
              showThirdwebBranding: false,
            }}

            

            theme={lightTheme({
              colors: { primaryButtonBg: "hsl(244, 99%, 50%)",
                        connectedButtonBg: "hsl(244, 99%, 50%)",
                        connectedButtonBgHover: "hsl(244, 99%, 50%)",
                        borderColor: "hsl(244, 99%, 50%)",
                        primaryText: "hsl(0, 0%, 100%)",
                        modalBg: "hsl(244, 89%, 61%)",
                        tertiaryBg: "hsl(244, 99%, 50%)",
               },
            })}
          />
        </div>

      </div>
    </nav>
  );
}

{/* <button className="ConnectButton rounded-full bg-[#1402FE] py-5 px-10 text-white hover:ring-2 hover:ring-[#1402FE] transition-all ease-linear">
            Connect Wallet
          </button> */}

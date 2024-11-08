import Image from 'next/image';
import Link from 'next/link';


export default function Hero() {
    return (
      
      <section id="scan">
        <div className="scan container bg-[rgba(20,2,254,0.2)] h-auto flex flex-col items-center justify-self-center text-center py-20 mt-32">
          <h1 className="grid text-6xl text-black my-8 gap-y-3">
            <span>SCAN YOUR QR OR</span>
            <span>BARCODE HERE</span>
          </h1>
            <div className="btn-scan my-14">
              <Link href="/scan">    {/* button untuk buka cam untuk scan qr or barcode */}
                <button className="px-10 py-4 bg-[#1402FE] hover:bg-[rgba(20,2,254,0.9)] text-white rounded-full">Scan Now</button>
              </Link>
            </div>
        </div>
        <div className="partner">
          <div className="grid">
            <div className="text flex justify-center items-center text-black">Thrusted by 45M+ users</div>
              <div className="images flex justify-center space-x-14 my-7">
                <div className=" partner-image px-8 py-5 text-center text-black rounded-full bg-[rgba(20,2,254,0.2)]">
                  be our partner
                </div>
                <div className="partner-image px-8 py-5 text-center text-black rounded-full bg-[rgba(20,2,254,0.2)]">
                  be our partner
                </div>
                <div className="partner-image px-8 py-5 text-center text-black rounded-full bg-[rgba(20,2,254,0.2)]">
                  be our partner
                </div>
                <div className="partner-image px-8 py-5 text-center text-black rounded-full bg-[rgba(20,2,254,0.2)]">
                  be our partner
                </div>
                <div className="partner-image px-8 py-5 text-center text-black rounded-full bg-[rgba(20,2,254,0.2)]">
                  be our partner
                </div>
              </div>
            </div>
        </div>
      </section>

    );
  }

  
  
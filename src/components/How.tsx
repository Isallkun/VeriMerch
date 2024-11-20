import Image from "next/image";

const How: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-[#5045F4] text text-white py-28">
      <div className="how-title mb-16">
        <h1 className="text-6xl text-center">HOW IT WORKS</h1>
      </div>

      <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-3 gap-10 px-8 py-16">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <div className="image mb-10">
            <Image
              src="/scan-qr.jpg"
              alt="QR Code"
              className="bg-cover bg-center rounded-lg"
              width={300}
              height={300}
            />
          </div>
          <h4 className="text-xl font-bold mb-2">1. Scan the QR Code</h4>
          <p className="text-center leading-loose px-14">
            Every genuine product comes with a unique QR code. Simply use your
            smartphone to scan the code, which connects you to the Lisk
            blockchain verification system.{" "}
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col-reverse items-center ">
          <div className="image mt-10">
            <Image
              src="/verified.jpg"
              alt="Authentic Product"
              className="bg-cover bg-center rounded-lg"
              width={300}
              height={300}
            />
          </div>
          <p className="text-center leading-loose px-14">
            After scanning, you'll be directed to a verification page that shows
            whether the product is authentic. If it's genuine, you'll see a
            confirmation message like "Verified Authentic Product."{" "}
          </p>
          <h4 className="text-xl font-bold mb-2">
            2. Check Product Authenticity
          </h4>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <div className="image mb-10">
            <Image
              src="/loyalty.jpg"
              alt="QR Code"
              className="bg-cover bg-center rounded-lg"
              width={300}
              height={300}
            />
          </div>
          <h4 className="text-xl font-bold mb-2">3. Earn Loyalty Rewards</h4>
          <p className="text-center leading-loose px-14">
            As a thank you, users who verify authentic products will
            automatically receive loyalty tokens. These tokens can be redeemed
            for discounts, exclusive gifts, or special offers from participating
            brands.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;

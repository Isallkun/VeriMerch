import Image from 'next/image';

export default function About() {   
    return(
        <section id="about">
            <div className="about text container mx-auto bg-grey-200 h-full flex flex-col items-center py-16">
                <div className="flex flex-rows-2 space-x-48 my-32">
                    <div className="about-card  h-full rounded-xl w-1/3">
                        <Image src="/about.jpg" alt="About Us" className="flex justify-self-center bg-cover bg-center rounded-lg" width={500} height={500}/>
                    </div>

                    <div className="about text w-1/2 flex flex-col justify-self-center text-center text-black my-8">
                        <h1 className="text-title text-6xl my-8 gap-y-3 ">ABOUT US</h1>
                        <div className="main-text leading-loose">
                            <p>
                            With our solution, each genuine product is linked to a unique digital token, allowing consumers to easily verify authenticity by simply scanning a QR code. This not only safeguards brand reputation but also builds trust and confidence among customers.
                            In addition, we reward loyal users who verify authentic products with special tokens, which can be redeemed for discounts, exclusive offers, and more. Together, we are creating a safer marketplace where authenticity is guaranteed, and consumer trust is prioritized.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
   
}
  
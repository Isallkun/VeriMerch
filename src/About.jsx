import Image from 'next/image';
import Link from 'next/link';

export default function About() {   
    return(
        <section id="about">
            <div className="about container mx-auto bg-grey-200 h-full flex flex-col items-center py-16">
                <div className="flex flex-rows-2 space-x-48 my-32">
                    <div className="about-card bg-gray-900 h-full rounded-xl w-1/3">
                        <p className="p-60">icon</p>
                    </div>

                    <div className="about-text w-1/2 flex flex-col justify-self-center text-center text-black my-8">
                        <h1 className="text-title text-6xl my-8 gap-y-3 ">ABOUT US</h1>
                        <div className="main-text leading-loose">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Suspendisse aliquam, felis eu gravida placerat, tortor ipsum luctus mauris,
                            quis tincidunt odio justo eget nisl. Etiam in libero at dui pulvinar eleifend. 
                            Curabitur nec nunc et arcu euismod venenatis sit amet nec metus. 
                            Nulla vitae est consequat, porttitor augue in, molestie velit. Morbi ut purus hendrerit dolor laoreet auctor. 
                            Nulla facilisi.  Quisque nec aliquet ipsum, vel malesuada massa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
   
}
  
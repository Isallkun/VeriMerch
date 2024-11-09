import Image from 'next/image';
import Link from 'next/link';

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="bg-[#5045F4] text-white py-28">
            <div className="how-title mb-16">
                <h1 className="text-6xl text-center">HOW IT WORKS</h1>
            </div>

            <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-3 gap-10 px-8 py-16">
                {/* Item 1 */}
                <div className="flex flex-col items-center">
                    <div className="image bg-gray-300 p-28 rounded-lg mb-10">
                        <p className="text-black">Icon</p>
                    </div>
                    <h4 className="text-xl font-bold mb-2">1. Lorem</h4>
                    <p className="text-center leading-loose px-14">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, minus! Vero praesentium reprehenderit, eveniet a, voluptatem doloribus similique ad minima molestiae vel corrupti ipsum! Cum molestias tempora nulla incidunt odio.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col-reverse items-center ">
                    <div className="image bg-gray-300 p-28 rounded-lg mt-10">
                        <p className="text-black">Icon</p>
                    </div>
                    <p className="text-center leading-loose px-14">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, omnis! Quam neque temporibus explicabo impedit dolorem ea recusandae dolores architecto expedita doloremque, non libero? Laudantium laboriosam optio ullam quae velit.
                    </p>
                    <h4 className="text-xl font-bold mb-2">2. Lorem</h4>
                </div> 

                {/* Item 3 */}
                <div className="flex flex-col items-center">
                    <div className="image bg-gray-300 p-28 rounded-lg mb-10">
                        <p className="text-black">Icon</p>
                    </div>
                    <h4 className="text-xl font-bold mb-2">3. Lorem</h4>
                    <p className="text-center leading-loose px-14">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae maxime suscipit sint, quam voluptate, itaque nobis dolorem voluptas nisi ea eaque illo natus amet ullam voluptatum voluptatem necessitatibus sed nihil?
                    </p>
                </div>
            </div>
        </section>
    );
}

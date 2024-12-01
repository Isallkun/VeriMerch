import Navbar from '@/layouts/Navbar';
import Hero from '@/layouts/Hero';
import How from '@/layouts/How';
import About from '@/layouts/About';
import Footer from '@/layouts/Footer';
import { ThirdwebProvider } from "thirdweb/react";

export default function HomePage() {
  return (
    <main>
      <ThirdwebProvider>
      <Navbar />
      <Hero />
      <How />
      <About /> 
      <Footer />
      </ThirdwebProvider>
    </main>
  );
}

import Navbar from '@/Navbar';
import Hero from '@/Hero';
import How from '@/How';
import About from '@/About';
import Footer from '@/Footer';
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

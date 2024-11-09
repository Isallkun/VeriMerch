import Navbar from '@/Navbar';
import Hero from '@/Hero';
import How from '@/How';
import About from '@/About';
import Footer from '@/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <How />
      <About /> 
      <Footer />
    </main>
  );
}

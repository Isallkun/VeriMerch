// app/page.js
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import How from '../components/How';
import About from '../components/About';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <How />
      <About /> */}
    </main>
  );
}

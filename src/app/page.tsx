import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import How from "@/components/How";
import Footer from "@/components/Footer";
import { ThirdwebProvider } from "thirdweb/react";

const Page: React.FC = () => {
  return (
    <div>
      <ThirdwebProvider>
        <Navbar />
        <Hero />
        <How />
        <About />
        <Footer />
      </ThirdwebProvider>
    </div>
  );
};

export default Page;

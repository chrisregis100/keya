import AppShowcase from "@/components/home/AppShowcase";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import Feature from "@/components/home/Feature";
import Services from "@/components/home/Services";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AppShowcase />
      <Feature />
      <Services />
      <FAQ />
      <Footer />
    </>
  );
}

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturesBar } from "@/components/FeaturesBar";
import { Industries } from "@/components/Industries";
import { Services } from "@/components/Services";
import { WhyTrustUs } from "@/components/WhyTrustUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesBar />
        <Industries />
        <Services />
        <WhyTrustUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

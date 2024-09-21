import Footer from "@/components/landingPage/footer";
import Header from "@/components/landingPage/header";
import Hero from "@/components/landingPage/hero";
import ProductCarousel from "@/components/landingPage/product-carousel";
import ScrollingText from "@/components/landingPage/scrolling-text";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ScrollingText />
      <ProductCarousel />
      <Footer />
    </main>
  );
}

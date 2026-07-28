import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import Services from "../components/home/Services";
import Impact from "../components/home/Impact";
import Events from "../components/home/Events";
import Gallery from "../components/home/Gallery";
import CTA from "../components/home/CTA";
import Leadership from "../components/home/Leadership";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <AboutPreview />
      <Services />
      <Impact />
      <Events />
      <Gallery />
      <CTA />
      <Leadership />
    </>
  );
}
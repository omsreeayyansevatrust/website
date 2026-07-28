import TopBar from "../../components/layout/TopBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import AboutHero from "../../components/about/AboutHero";
import OurStory from "../../components/about/OurStory";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />

      <AboutHero />
      <OurStory />

      <Footer />
    </>
  );
}
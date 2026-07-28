import TopBar from "../../components/layout/TopBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import GalleryHero from "../../components/gallery/GalleryHero";
import GalleryGrid from "../../components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <>
      <TopBar />
      <Header />

      <GalleryHero />
      <GalleryGrid />

      <Footer />
    </>
  );
}
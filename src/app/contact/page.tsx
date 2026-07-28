import TopBar from "../../components/layout/TopBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import MapSection from "../../components/contact/MapSection";

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Header />

      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />

      <Footer />
    </>
  );
}
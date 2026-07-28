import TopBar from "../../components/layout/TopBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import EventsHero from "../../components/events/EventsHero";
import EventsGrid from "../../components/events/EventsGrid";

export default function EventsPage() {
  return (
    <>
      <TopBar />
      <Header />

      <EventsHero />
      <EventsGrid />

      <Footer />
    </>
  );
}
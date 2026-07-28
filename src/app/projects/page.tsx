import TopBar from "../../components/layout/TopBar";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import ProjectsHero from "../../components/projects/ProjectsHero";
import ProjectsGrid from "../../components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <TopBar />
      <Header />

      <ProjectsHero />
      <ProjectsGrid />

      <Footer />
    </>
  );
}
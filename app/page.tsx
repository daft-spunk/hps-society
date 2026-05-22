import Ribbon from "./_components/Ribbon";
import Masthead from "./_components/Masthead";
import SubNav from "./_components/SubNav";
import AboutSection from "./_components/AboutSection";
import Timeline from "./_components/Timeline";
import PullQuote from "./_components/PullQuote";
import VisionSection from "./_components/VisionSection";
import CampusesSection from "./_components/CampusesSection";
import MembersSection from "./_components/MembersSection";
import Footer from "./_components/Footer";
import ScrollReveal from "./_components/ScrollReveal";
import Parallax from "./_components/Parallax";

export default function Page() {
  return (
    <>
      <Ribbon />
      <Masthead />
      <SubNav />
      <main>
        <AboutSection />
        <Timeline />
        <PullQuote />
        <VisionSection />
        <CampusesSection />
        <MembersSection />
      </main>
      <Footer />
      <ScrollReveal />
      <Parallax />
    </>
  );
}

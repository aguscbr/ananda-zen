import {
  Navbar,
  HeroSection,
  AboutSection,
  ClassesSection,
  BenefitsSection,
  StoreSection,
  ContactSection,
  Footer,
} from "./components";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <BenefitsSection />
        <StoreSection />
        <ContactSection />
      </header>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

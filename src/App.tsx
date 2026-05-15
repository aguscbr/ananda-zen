import {
  AboutSection,
  BenefitsSection,
  ClassesSection,
  HeroSection,
  Navbar,
  ContactSection,
} from "./components";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <BenefitsSection />
        <ContactSection />
      </header>
    </>
  );
}

export default App;

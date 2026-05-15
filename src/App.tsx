import {
  AboutSection,
  BenefitsSection,
  ClassesSection,
  HeroSection,
  Navbar,
  ContactSection,
  Footer
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

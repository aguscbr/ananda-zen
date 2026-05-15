import { AboutSection, BenefitsSection, ClassesSection, HeroSection, Navbar } from "./components";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ClassesSection />
        <BenefitsSection />
      </header>
    </>
  );
}

export default App;

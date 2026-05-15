import { AboutSection, ClassesSection, HeroSection, Navbar } from "./components";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ClassesSection />
      </header>
    </>
  );
}

export default App;

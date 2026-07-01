import { LanguageProvider } from "../shared/context/LanguageProvider";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Hero } from "../features/hero/components/Hero";
import { About } from "../features/about/components/About";
import { Journey } from "../features/journey/components/Journey";
import { Strengths } from "../features/strengths/components/Strengths";
import { Philosophy } from "../features/philosophy/components/Philosophy";
import { Contact } from "../features/contact/components/Contact";

/**
 * Root application component. Composes the shared layout (nav/footer)
 * around the page's feature sections, in the order they appear.
 */
function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream-100 font-body text-charcoal">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Journey />
          <Strengths />
          <Philosophy />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

"use client";
import { LangProvider } from "./context/lang";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Footer />
      </main>
    </LangProvider>
  );
}

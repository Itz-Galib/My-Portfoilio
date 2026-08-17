import Background from "./components/background";
import Intro from "./components/intro";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React, { useState } from "react";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import { Contact } from "lucide-react";

export default function App() {
  return (
    // মূল ডার্ক ব্যাকগ্রাউন্ড কন্টেইনার
    <>
      <div className="bg-gray-950 text-white min-h-screen relative pb-32">
        <div className="relative min-h-screen w-full bg-[#0a0a16] text-white overflow-hidden flex flex-col items-center justify-center">
          {/* background Section */}
          <Background />
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* Intro Section */}
          <Intro />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* About Section */}
          <About />

          <Experience />

          <Projects />
          <Contact />

          {/* Floating nav bar */}
          <Navbar />
          <Footer />
        </div>
      </div>
    </>
  );
}

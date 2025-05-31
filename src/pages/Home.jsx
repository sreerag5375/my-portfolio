import React from "react";
import Navbar from "../components/Navbar";
import WorkSection from "../components/WorkSection";
import AboutMe from "../components/AboutMe";
import WorkExperience from "../components/WorkExperience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-gray-900 mb-4">
            I'm Sreerag —{" "}
            <span style={{ color: "#989898" }}>
              a digital
              <br />
              product designer
            </span>
          </h1>
        </div>
      </section>

      <WorkSection />
      <AboutMe />
      <WorkExperience />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Portfolio;

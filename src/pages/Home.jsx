import React from "react";
import Navbar from "../components/Navbar";


const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>

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

      {/* Works Section */}
      <section
        id="work"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        <div className="mb-8">
          <span className=" text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">Works - </span>
          <span className="text-sm md:text-base text-gray-600">Personal & Freelancing</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-400 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">TextLens</h3>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">TextLens</h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">TextLens</h3>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-purple-400 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">TextLens</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-12">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-200 to-green-300 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              I am from Kerala, graduated in computer Application from
              Bharathiyar University. Started in IT support, transitioned into
              SaaS engineering, and discovered a passion for UI/UX design after
              redesigning a full SaaS interface.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm committed to continuous learning and enjoy crafting clean,
              user-focused designs that contribute to meaningful product
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-12">
          Work Experience
        </h2>

        <div className="space-y-8">
          <div className="border-l-2 border-gray-200 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-2 top-1"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">FinaiApps</h3>
              <p className="text-gray-600">Software engineer intern</p>
              <p className="text-sm text-gray-500">July 2024 - January</p>
            </div>
          </div>

          <div className="border-l-2 border-gray-200 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-2 top-1"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">FinaiApps</h3>
              <p className="text-gray-600">Software engineer intern</p>
              <p className="text-sm text-gray-500">July 2024 - January</p>
            </div>
          </div>

          <div className="border-l-2 border-gray-200 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-2 top-1"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">FinaiApps</h3>
              <p className="text-gray-600">Software engineer intern</p>
              <p className="text-sm text-gray-500">July 2024 - January</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Want to create something
            <br />
            Lovable? Drop me an email.
          </h2>
          <div className="flex items-center justify-center">
            <a
              href="mailto:sreeragsree175@gmail.com"
              className="inline-flex items-center text-lg text-gray-900 hover:text-gray-600 font-medium"
            >
              <span className="mr-2">→</span>
              sreeragsree175@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

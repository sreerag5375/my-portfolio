import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-pink-50  py-16 text-center rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 text-center">
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
  );
};

export default Contact;

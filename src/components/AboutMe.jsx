import config from "../config";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-8">
        About Me
      </h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-start justify-center">
        {/* Photo */}
        <img
          src={config.assets.aboutMe}
          alt="my photo"
          className="w-full h-full object-cover rounded-lg align-middle"
        />

        {/* About Text */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            I am from Kerala, graduated in computer Application from Bharathiyar
            University. Started in IT support, transitioned into SaaS
            engineering, and discovered a passion for UI/UX design after
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
  );
};

export default AboutMe;

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-0">
        Work Experience
      </h2>

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-start justify-center">
        <div></div>

        {/* About Text */}
        <div className="space-y-4">
          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-6 relative">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  FinaiApps
                </h3>
                <p className="text-gray-600">Software engineer intern</p>
                <p className="text-sm text-gray-500">July 2024 - January</p>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-6 relative">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  FinaiApps
                </h3>
                <p className="text-gray-600">Software engineer intern</p>
                <p className="text-sm text-gray-500">July 2024 - January</p>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-6 relative">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  FinaiApps
                </h3>
                <p className="text-gray-600">Software engineer intern</p>
                <p className="text-sm text-gray-500">July 2024 - January</p>
              </div>
            </div>

            <div className=" pb-6 relative">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                  FinaiApps
                </h3>
                <p className="text-gray-600">Software engineer intern</p>
                <p className="text-sm text-gray-500">July 2024 - January</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

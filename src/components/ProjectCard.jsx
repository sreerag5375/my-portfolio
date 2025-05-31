import React, { useState } from "react";

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    } else {
      // Default navigation - you can customize this
      window.location.href = project.link;
    }
  };

  // Generate color classes from single theme
  const colorClasses = {
    gradientFrom: `${project.colorTheme}-200`,
    gradientTo: `${project.colorTheme}-300`,
    iconColor: `${project.colorTheme}-600`,
    bgColor: `${project.colorTheme}-400`,
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        {/* Project Image/Gradient */}
        <div
          className={`aspect-video bg-gradient-to-br from-${colorClasses.gradientFrom} to-${colorClasses.gradientTo} flex items-center justify-center`}
        >
          <img
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            src={project.image}
            alt={project.title}
          />
        </div>

        {/* Project Info */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base lg:text-lg font-semibold text-gray-900">
              {project.title}
            </h3>
            <span className="text-[10px] sm:text-[11px] text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          {project.description && (
            <p className="text-gray-600 text-xs sm:text-sm">
              {project.description}
            </p>
          )}
        </div>
      </div>

      {/* Custom Tooltip */}
      {isHovered && (
        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-10 pointer-events-none">
          <div className="flex items-center gap-1">
            <span>View Project</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

import { useNavigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import config from "../config";

const WorkSection = () => {
  const navigate = useNavigate();

  // Simple click handler - just navigate to project page
  const handleProjectClick = (project) => {
    navigate(project.link);
  };

  return (
    <section
      id="work"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2">
          Works - 
        </span>
        <span className="text-sm md:text-base text-gray-600">
          Personal & Freelancing
        </span>
      </div>

      {/* Projects Grid - Each card is clickable */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {config.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
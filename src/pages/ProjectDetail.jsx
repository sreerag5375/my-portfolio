import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import config from '../config';

const ProjectDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get project slug from URL (e.g., "saleboost" from "/work/saleboost")
  const projectSlug = location.pathname.split('/').pop();
  
  // Find the project that matches the URL slug
  const project = config.projects.find(p => p.link.includes(projectSlug));

  // If project not found, show error
  if (!project) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Generate color classes for the project theme
  const colorClasses = {
    gradientFrom: `${project.colorTheme}-200`,
    gradientTo: `${project.colorTheme}-300`,
    accentColor: `${project.colorTheme}-600`,
    bgColor: `${project.colorTheme}-100`
  };

  return (
    <div className="min-h-screen">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {project.title}
            </h1>
            <span className={`inline-block text-sm bg-${project.colorTheme}-100 text-${colorClasses.accentColor} px-3 py-1 rounded-full self-start`}>
              {project.category}
            </span>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover"
              onError={(e) => {
                // Fallback to gradient if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback gradient background */}
            <div 
              className={`aspect-video bg-gradient-to-br from-${colorClasses.gradientFrom} to-${colorClasses.gradientTo} flex items-center justify-center`}
              style={{ display: 'none' }}
            >
              <div className="text-center">
                <div className={`w-24 h-24 bg-${project.colorTheme}-400 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <svg className={`w-12 h-12 text-${colorClasses.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-600">Project Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            
            <div className="prose prose-lg text-gray-700 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Challenge</h3>
                <p>This project addressed specific user needs and business requirements in the {project.category.toLowerCase()} space. The main challenge was to create an intuitive and effective solution.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Solution</h3>
                <p>Our approach focused on user-centered design principles, creating a clean and functional interface that meets both user needs and business objectives.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Results</h3>
                <p>The final solution delivered improved user experience and achieved the project goals with measurable improvements in key metrics.</p>
              </div>
            </div>
          </div>

          {/* Project Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Project Type</span>
                  <p className="text-gray-900">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Year</span>
                  <p className="text-gray-900">2024</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Tools Used</span>
                  <p className="text-gray-900">Figma, Sketch, Adobe XD</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Duration</span>
                  <p className="text-gray-900">2-3 months</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Role</span>
                  <p className="text-gray-900">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="mt-20 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {config.projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(otherProject => (
                <div 
                  key={otherProject.id}
                  onClick={() => navigate(otherProject.link)}
                  className="cursor-pointer group"
                >
                  <div className="aspect-video rounded-lg overflow-hidden mb-3 group-hover:shadow-md transition-shadow duration-200">
                    <img 
                      src={otherProject.image} 
                      alt={otherProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div 
                      className={`aspect-video bg-gradient-to-br from-${otherProject.colorTheme}-200 to-${otherProject.colorTheme}-300 flex items-center justify-center`}
                      style={{ display: 'none' }}
                    >
                      <div className={`w-12 h-12 bg-${otherProject.colorTheme}-400 rounded-lg flex items-center justify-center`}>
                        <svg className={`w-6 h-6 text-${otherProject.colorTheme}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                    {otherProject.title}
                  </h4>
                  <p className="text-sm text-gray-600">{otherProject.category}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
import config from "../config";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-600">Reach out anytime :)</div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {/* LinkedIn */}
            <a
              href={config.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline text-sm font-medium"
            >
              LinkedIn
            </a>
            {/* Instagram */}
            <a
              href={config.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline text-sm font-medium"
            >
              Instagram
            </a>

            {/* WhatsApp */}
            <a
              href={config.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline text-sm font-medium"
            >
              WhatsApp
            </a>

            {/* Phone */}
            <a
              href={`tel:${config.socialLinks.phone}`}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline text-sm font-medium"
            >
              Phone
            </a>

            {/* Email */}
            <a
              href={`mailto:${config.socialLinks.email}`}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200 underline text-sm font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

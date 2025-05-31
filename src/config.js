// config.js - Global configuration file
// Store all changeable values here for easy updates

const config = {
  // Resume URL
  resumeUrl:
    "https://drive.google.com/file/d/1T1u3vkbYspQJQyShH2JNoajtkNf7nEYN/view?usp=sharing",

  // Personal Information
  name: "Sreerag",
  email: "sreeragsree175@gmail.com",

  // Asset URLs 
  assets: {
    logo: "/assets/logo-image.svg",
    aboutMe: "/assets/about-me-image.png",
  },

  // Social Media Links
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/sreerag-p-g-34945a229/",
    instagram: "https://www.instagram.com/sreeeerag_/",
    whatsapp: "https://wa.me/8113081034", 
    phone: "+91 81130 81034", 
    email: "sreeragsree175@gmail.com",
  },

  // Project URLs
  projects: [
    {
      id: 1,
      title: "Saleboost",
      description: "Simple shopify app for boost sales via discounts",
      image: "/assets/saleboost/saleboost-cover-image.png",
      colorTheme: "gray",
      category: "Product Design",
      link: "/work/saleboost",
    },
    {
      title: "TextLens",
      description: "AI-powered text analysis tool",
      image: "/assets/textlens/textlens-cover-image.png",
      colorTheme: "blue",
      category: "Product redesign",
      link: "/work/textlens",
    },
    {
      id: 3,
      title: "Salon Booking App",
      description: "CLient side app for book salon services",
      image: "/assets/salon-client/salon-client-app-cover-image.png",
      colorTheme: "purple",
      category: "Mobile Design",
      link: "/work/salon-app-client",
    },
    {
      id: 4,
      title: "SaaS Landing Page",
      description: "Simple landing page for a shopify app",
      image: "/assets/dual-price-landing/shopify-app-landing-cover-image.png",
      colorTheme: "orange",
      category: "Web Design",
      link: "/work/saas-landing",
    },
    {
      id: 5,
      title: "Kids Story app",
      description: "Story, music, books for kids",
      image: "/assets/dual-price-landing/shopify-app-landing-cover-image.png",
      colorTheme: "black",
      category: "Mobile app",
      link: "/work/kids-story",
    },
  ],
};

export default config;

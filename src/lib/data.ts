// src/lib/data.ts
interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    image: string;
    featured: boolean;
    content: string;
    client: string;
    year: number;
    services: string[];
    images: string[];
  }
  
  // Demo projects data
  const projects: Project[] = [
    {
      id: "vibrant-rebrand",
      title: "Vibrant Rebrand",
      description: "Complete brand identity redesign for a tech startup.",
      category: "Branding",
      image: "/images/projects/project1.jpg",
      featured: true,
      content: "This project involved a complete rebranding for a tech startup looking to revitalize their market presence. The challenge was to create a visual identity that felt innovative yet approachable, with a color palette that would stand out in a crowded digital landscape.",
      client: "TechNova",
      year: 2023,
      services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
      images: [
        "/images/projects/project1-detail1.jpg",
        "/images/projects/project1-detail2.jpg",
        "/images/projects/project1-detail3.jpg"
      ]
    },
    {
      id: "modern-packaging",
      title: "Modern Packaging Design",
      description: "Eco-friendly packaging design for a cosmetics line.",
      category: "Print",
      image: "/images/projects/project2.jpg",
      featured: true,
      content: "Designed a sustainable packaging system for a premium cosmetics brand that aligned with their eco-conscious values while maintaining a luxury aesthetic. The design incorporated recycled materials with a minimalist approach.",
      client: "Glow Organics",
      year: 2023,
      services: ["Packaging Design", "Sustainable Materials", "Print Production"],
      images: [
        "/images/projects/project2-detail1.jpg",
        "/images/projects/project2-detail2.jpg"
      ]
    },
    {
      id: "digital-campaign",
      title: "Digital Campaign",
      description: "Comprehensive digital marketing assets for product launch.",
      category: "Digital",
      image: "/images/projects/project3.jpg",
      featured: true,
      content: "Created a cohesive set of digital marketing materials for a major product launch, including social media templates, digital ads in various formats, and landing page designs.",
      client: "FitnessPro",
      year: 2023,
      services: ["Digital Design", "Social Media Assets", "Web Banners"],
      images: [
        "/images/projects/project3-detail1.jpg",
        "/images/projects/project3-detail2.jpg"
      ]
    },
    {
      id: "app-interface",
      title: "Mobile App Interface",
      description: "User-centered design for a wellness application.",
      category: "UI/UX",
      image: "/images/projects/project4.jpg",
      featured: false,
      content: "Designed an intuitive mobile application interface for a wellness platform, focusing on accessibility and a clean visual hierarchy that promotes user engagement and retention.",
      client: "MindfulMe",
      year: 2022,
      services: ["UI Design", "UX Research", "Prototyping", "Design System"],
      images: [
        "/images/projects/project4-detail1.jpg",
        "/images/projects/project4-detail2.jpg"
      ]
    },
    {
      id: "annual-report",
      title: "Annual Report Design",
      description: "Visual storytelling for company achievements.",
      category: "Print",
      image: "/images/projects/project5.jpg",
      featured: false,
      content: "Created a visually compelling annual report that transformed complex data into an engaging narrative about the company's yearly performance and future vision.",
      client: "Global Innovations Inc.",
      year: 2022,
      services: ["Editorial Design", "Data Visualization", "Print Production"],
      images: [
        "/images/projects/project5-detail1.jpg",
        "/images/projects/project5-detail2.jpg"
      ]
    },
    {
      id: "event-branding",
      title: "Event Branding",
      description: "Cohesive visual identity for international conference.",
      category: "Branding",
      image: "/images/projects/project6.jpg",
      featured: false,
      content: "Developed a distinctive visual identity for an international tech conference, including logo, promotional materials, wayfinding signage, and digital assets.",
      client: "TechConnect Conference",
      year: 2023,
      services: ["Event Branding", "Environmental Graphics", "Promotional Materials"],
      images: [
        "/images/projects/project6-detail1.jpg",
        "/images/projects/project6-detail2.jpg"
      ]
    }
  ];
  
  interface ProjectFilters {
    featured?: boolean;
    category?: string;
  }
  
  export const getProjects = (filters: ProjectFilters = {}) => {
    let filteredProjects = [...projects];
    
    if (filters.featured) {
      filteredProjects = filteredProjects.filter(project => project.featured);
    }
    
    if (filters.category) {
      filteredProjects = filteredProjects.filter(
        project => project.category.toLowerCase() === filters.category?.toLowerCase()
      );
    }
    
    return filteredProjects;
  };
  
  export const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
  };
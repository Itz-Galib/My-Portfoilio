import React from "react";
import { ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Way to Deen — Islamic Utility Mobile App",
      year: "2024",
      description: [
        "Built a full-featured Flutter app with Prayer Time (live API via FastAPI backend), Qibla Compass (device sensor), Quran reader, Tazbih counter, audio playback, and calendar — modular widget architecture with clean navigation.",
        "Integrated FastAPI as a middleware layer to consume prayer time REST APIs, returning structured JSON to the Flutter front-end.",
      ],
      tags: ["Dart", "Flutter", "FastAPI", "REST API"],
      githubUrl: "https://github.com/Itz-Galib/way_to_deen",
      liveUrl:
        "https://drive.google.com/file/d/1CQWEvsnHPuxsUMpJote05cSv_E-ED_6x/view?usp=sharing", // Change to live URL string when deployed
    },
    {
      title: "Deen Essentials — E-Commerce Platform",
      year: "2024",
      description: [
        "Full-stack e-commerce site with auth, product catalog, cart/checkout, order history, wishlist, reviews, admin panel, and Stripe payment integration on a PHP/MySQL backend.",
      ],
      tags: ["PHP", "MySQL", "HTML/CSS/JS", "Stripe API"],
      githubUrl: "https://github.com/NurMohammadkazi/DEEN_ESSENTIALS",
      liveUrl: null,
    },
    {
      title: "Rice Varieties Classifier — AI + Mobile",
      year: "2023",
      description: [
        "Trained a CNN image-classification model on a rice-variety dataset; integrated inference into a Flutter mobile prototype (end-to-end AI-to-mobile pipeline).",
      ],
      tags: ["Python", "PyTorch", "Jupyter Notebook", "Flutter"],
      githubUrl:
        "https://github.com/Itz-Galib/Rice_varaities_classification.git",
      liveUrl: null,
    },
    {
      title: "Employee Management System — Enterprise Web Application",
      year: "2023",
      description: [
        "Engineered a secure desktop CRUD system using JavaFX and subsequently re-architected the entire backend into ASP.NET MVC to implement enterprise-grade web patterns.",
        "Leveraged Entity Framework Core for seamless Object-Relational Mapping (ORM) with SQL Server, writing optimized queries for data processing.",
        "Implemented server-side form validation and secure routing mechanisms to ensure robust data integrity.",
      ],
      tags: ["SQL Server", "Entity Framework Core", "JavaFX"],
      githubUrl: "https://github.com/Itz-Galib/hojo.git",
      liveUrl: null,
    },
  ];

  return (
    <section
      id="projects"
      className="relative z-10 px-4 py-16 max-w-5xl mx-auto text-left"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-400/30 transition-all duration-300 group"
          >
            <div>
              {/* Header: Title & Year */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <span className="flex items-center gap-1 text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 shrink-0">
                  <Calendar size={12} /> {project.year}
                </span>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 text-gray-300 text-sm mb-6 list-disc list-inside leading-relaxed">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex}>
                    <span className="text-gray-300">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer: Links & Live Status */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 mt-auto">
              {/* GitHub Link */}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Code Repository
                </a>
              ) : (
                <span className="text-xs text-gray-500 italic">
                  Repository unavailable
                </span>
              )}

              {/* Live Status / Live Demo Button */}
              <div>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-all shadow-md shadow-cyan-500/10"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-gray-500"></span>{" "}
                    Not Live
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  
  );
};

export default Projects;

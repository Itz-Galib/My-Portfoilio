import React from "react";
import profileImage from "../assets/profile.jpg"; // Double-check this path matches your folder structure
import {
  Download,
  Code,
  BookOpen,
  Server,
  Layers,
  Database,
  Globe,
} from "lucide-react";

const About = () => {
  const currentWork = [
    {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "Job Aggregator Platform",
      description:
        "Building automated job aggregation system with FastAPI & PostgreSQL",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-purple-400" />,
      title: "Skyscanner Internship",
      description:
        "Software Engineering Virtual Internship (Forage) - In Progress",
    },
    {
      icon: <Server className="w-5 h-5 text-pink-400" />,
      title: "Learning Modern Backend",
      description:
        "Deep diving into Python, FastAPI, and automated data pipelines",
    },
  ];

  const techStacks = {
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Flutter"],
    Backend: ["Node.js", "Express.js", "FastAPI", "ASP.NET MVC"],
    Database: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server"],
    Tools: ["Git & GitHub", "Postman", "Vercel", "Firebase"],
  };

  const handleDownloadCV = () => {
    const fileId = "1dwkcOOgmzSUeA_UCk4NfS2aXa6J1jadE";
    // Fixed template literal & Google Drive direct download URL structure
    const forceDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement("a");
    link.href = forceDownloadUrl;
    link.setAttribute("target", "_self");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative z-10 px-4 py-16 max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Bio */}
        <div className="md:col-span-2 space-y-4">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a{" "}
            <span className="text-cyan-400 font-medium">
              Computer Science & Engineering
            </span>{" "}
            passout student at Ahsanullah University of Science and Technology
            with a passion for full-stack web development. Currently I am
            searching for jobs and learning skills in mobile development.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I love building responsive web applications that solve real-world
            problems. My journey in tech started with web development and has
            evolved into a deep interest in building scalable backend systems
            and automated data pipelines.
          </p>
        </div>

        {/* Right Column - CV Download */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-fit">
          {/* Photo Card */}
          <div className="relative group mb-6">
            <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-cyan-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>

              <img
                src={profileImage}
                alt="Md Luthful Hasan Galib"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-xl opacity-50 -z-10"></div>
              </div>

              {/* Overlay with social links */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
                {/* Ensure your GitHub username/link is accurate here */}
                <a
                  href="https://github.com/Itz-Galib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/md-luthful-hasan-galib-7673a0340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:luthfulomi@gmail.com"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center mt-3">
              <h4 className="text-white text-sm font-medium">
                Md Luthful Hasan Galib
              </h4>
              <p className="text-gray-400 text-xs">Full Stack Developer</p>
            </div>

            <div className="absolute -bottom-1 right-1/4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">📄 Download CV</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get my complete resume to learn more about my experience and
              projects.
            </p>

            <button
              onClick={handleDownloadCV}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              <Download size={18} />
              Download CV (PDF)
            </button>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                📄 PDF • 1.2 MB • Updated 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Layers className="w-5 h-5 text-cyan-400" />
          Technology Stack
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(techStacks).map(([category, technologies]) => (
            <div
              key={category}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h4 className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-3">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="mt-8 flex flex-wrap gap-6 items-center justify-start">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Database className="w-4 h-4" />
          <span>PostgreSQL • MongoDB • MySQL</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Globe className="w-4 h-4" />
          <span>REST APIs • JWT • FastAPI</span>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { Code, BookOpen } from "lucide-react";

const Experience = () => {
  const currentWork = [
    {
      icon: <BookOpen className="w-5 h-5 text-purple-400" />,
      title: "Software Engineering Virtual Internship — Skyscanner (Forage)",
      description:
        "Utilizing Skyscanner's Backpack React UI library to construct production-ready web interfaces and interactive date-selection workflows[cite: 1].",
    },
    {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "Job Aggregator & Expiration Tracking Platform",
      description:
        "Engineering a multi-source job aggregation and deadline-tracking platform using React, Tailwind CSS, Python (FastAPI), and PostgreSQL[cite: 1].",
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 px-4 py-16 max-w-5xl mx-auto text-left"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
      </div>

      <div className="mt-6">
        <h3 className="text-white font-semibold mb-6 text-lg">
          📌 Professional Experience & Current Work
        </h3>
        <div className="space-y-6">
          {currentWork.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-white/5 border border-white/10 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white text-base font-medium">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
